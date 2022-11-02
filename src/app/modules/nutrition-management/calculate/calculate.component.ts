import { Component, OnInit } from '@angular/core';
import { GlobalVariable } from '../../../common/global-variable';
import { CommonService } from '../../../common/common.service';
import { Router } from '@angular/router';
import {
  CalculateRequestDto,
  CalculateResponseDto,
  EnumCalculateRequestDtoAnimalType,
  GetManyIngredientEntityResponseDto,
  IngredientCalculateService,
  IngredientEntity,
  IngredientRequest,
  IngredientService,
} from '../../../services';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { DatePipe, DecimalPipe, formatNumber } from '@angular/common';
import { debounceTime } from 'rxjs';
import { printStyle } from '../../../common/constant';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.scss'],
})
export class CalculateComponent implements OnInit {
  tableServiceParam: any = {
    limit: 200,
    page: 1,
    sort: ['code,ASC'],
    filter: [],
  };
  ingredients: any = [];
  infoForm!: FormGroup;
  animals = [
    {
      value: EnumCalculateRequestDtoAnimalType.cattle,
      label: 'Heo/Gia súc',
    },
    {
      value: EnumCalculateRequestDtoAnimalType.poultry,
      label: 'Gia cầm',
    },
    {
      value: EnumCalculateRequestDtoAnimalType.aquaculture,
      label: 'Thủy sản',
    },
  ];
  items!: FormArray;
  itemCalculates!: FormArray;
  totalPercentage = 0;
  totalPrice = 0;
  totalWeight = 0;

  constructor(
    private globalVariant: GlobalVariable,
    private common: CommonService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.globalVariant.setHeader({
      title: 'Tính toán dinh dưỡng',
    });
    this.infoForm = new FormGroup({
      animal: new FormControl(EnumCalculateRequestDtoAnimalType.cattle),
      author: new FormControl(),
      company: new FormControl(),
      formulaCode: new FormControl(),
      formulaName: new FormControl(),
      items: new FormArray([]),
      itemCalculates: new FormArray([]),
    });
    this.items = this.infoForm.get('items') as FormArray;
    this.itemCalculates = this.infoForm.get('itemCalculates') as FormArray;
    this.getIngredient();
  }

  getIngredient(): void {
    this.globalVariant.setIsLoading(true);
    IngredientService.getManyBase(this.tableServiceParam)
      .then((res) => {
        this.globalVariant.setIsLoading(false);
        this.ingredients =
          res?.data?.reduce((arr: any, curr: IngredientEntity) => {
            if (curr.code)
              arr.push({
                ...curr,
                checked: false,
              });
            return arr;
          }, []) || [];
      })
      .catch((err) => {
        this.globalVariant.setIsLoading(false);
      });
  }

  onCheckIng(ing?: any): void {
    if (ing?.checked) {
      this.items.push(
        new FormGroup({
          ingName: new FormControl(ing.name || ing.otherName),
          ingCode: new FormControl(ing.code),
          ingWeight: new FormControl(0),
          ingPrice: new FormControl(0),
          ingTotalPrice: new FormControl(0),
          isAddNew: new FormControl(false),
        })
      );
    } else {
      const ingRemove = this.items.value?.find(
        (item: any) => item.ingCode === ing.code
      );
      const ingRemoveIndex = this.items.value.indexOf(ingRemove);
      this.items.removeAt(ingRemoveIndex);
    }
    this.onValueChange();
  }

  getTotalPercentage(): void {
    this.totalPercentage =
      this.itemCalculates.value?.reduce((total: any, curr: any) => {
        if (curr.unit === '%') total += Number(curr.value || 0);
        return total;
      }, 0) || 0;
  }

  getTotalPrice(): void {
    this.totalPrice =
      this.items.value?.reduce((total: any, curr: any) => {
        return total + Number(curr.ingTotalPrice || 0);
      }, 0) || 0;
    this.totalWeight =
      this.items.value?.reduce((total: any, curr: any) => {
        return total + Number(curr.ingWeight || 0);
      }, 0) || 0;
  }

  onValueChange(): void {
    this.items.controls?.map((control, index) => {
      control
        ?.get('ingWeight')
        ?.valueChanges.pipe(debounceTime(300))
        .subscribe((value) => {
          control.patchValue({
            ingTotalPrice:
              Number(value || 0) * Number(control.value.ingPrice || 0),
          });
          this.getTotalPrice();
        });
    });
    this.items.controls?.map((control, index) => {
      control
        ?.get('ingPrice')
        ?.valueChanges.pipe(debounceTime(300))
        .subscribe((value) => {
          control.patchValue({
            ingTotalPrice:
              Number(control.value.ingWeight || 0) * Number(value || 0),
          });
          this.getTotalPrice();
        });
    });
  }

  onCalculate(): void {
    const ingredients =
      this.items.value.reduce((arr: IngredientRequest[], curr: any) => {
        arr.push({
          code: curr.ingCode,
          price: curr.ingPrice || 0,
          weight: curr.ingWeight || 0,
        });
        return arr;
      }, []) || [];
    const request: CalculateRequestDto = {
      animalType: this.infoForm.value.animal,
      ingredients,
    };
    this.globalVariant.setIsLoading(true);
    IngredientCalculateService.ingredientCalculateControllerCalculateNutrition({
      body: request,
    })
      .then((res: CalculateResponseDto) => {
        this.globalVariant.setIsLoading(false);
        Object.keys(res).map((key) => {
          // @ts-ignore
          this.itemCalculates.push(
            new FormGroup({
              // @ts-ignore
              name: new FormControl(res[key].code),
              // @ts-ignore
              value: new FormControl(
                // @ts-ignore
                formatNumber(res[key].value, 'en-us', '1.0-2')
              ),
              // @ts-ignore
              unit: new FormControl(res[key].unit),
              isEdit: new FormControl(false),
            })
          );
        });
        this.getTotalPercentage();
      })
      .catch((err) => {
        this.globalVariant.setIsLoading(false);
        this.itemCalculates.reset();
      });
  }

  onPrint(): void {
    let tableContent = '';
    const totalWeight =
      this.items.value?.reduce((total: any, curr: any) => {
        return total + Number(curr?.ingWeight || 0);
      }, 0) || 0;
    const totalPrice =
      this.items.value?.reduce((total: any, curr: any) => {
        return total + Number(curr?.ingTotalPrice || 0);
      }, 0) || 0;
    this.items.value?.map((item: any) => {
      if (item.ingWeight)
        tableContent +=
          '<tr>' +
          `<td class="px-2 py-1">${item.ingCode}</td>` +
          `<td class="px-1 py-1">${item.ingName}</td>` +
          `<td class="px-2 py-1">${new DecimalPipe('en-us').transform(
            item.ingWeight,
            '1.0-2'
          )}</td>` +
          `<td class="px-2 py-1">${new DecimalPipe('en-us').transform(
            item.ingPrice,
            '1.0-2'
          )}</td>` +
          `<td class="border-r px-2 py-1">${new DecimalPipe('en-us').transform(
            item.ingTotalPrice,
            '1.0-2'
          )}</td>` +
          '</tr>';
    });
    const printContents =
      '' +
      '<div class="w-full flex items-center justify-between">' +
      '<div class="flex flex-1 items-center justify-center">' +
      '<p>Người lập công thức</p>' +
      '</div>' +
      '<div class="flex flex-1 items-center justify-center">' +
      `<p>Ngày in: ${new DatePipe('en-us').transform(
        new Date(),
        'dd/MM/yyyy'
      )}</p>` +
      '</div>' +
      '</div>' +
      '<div class="w-full flex items-center justify-between">' +
      '<div class="flex flex-1 items-center justify-center">' +
      `<p class="uppercase">${this.infoForm.value.author || ''}</p>` +
      '</div>' +
      '<div class="flex flex-1 items-center justify-center">' +
      `<p>UNIT: ${this.infoForm.value.company || ''}</p>` +
      '</div>' +
      '</div>' +
      '<div class="mt-10 flex items-start justify-between">' +
      `<div class="flex flex-1 flex-col"><p class="uppercase border-b-double">Mã CT</p><p class="uppercase">${
        this.infoForm.value.formulaCode || ''
      }</p></div>` +
      `<div class="flex flex-1 flex-col"><p class="uppercase border-b-double">Tên Công thức</p><p class="uppercase">${
        this.infoForm.value.formulaName || ''
      }</p></div>` +
      '<p class="flex-1 uppercase border-b-double">Ngày lưu</p>' +
      '<p class="flex-1 uppercase border-b-double">Bản lưu</p>' +
      '<p class="flex-1 uppercase border-b-double">Giá lưu</p>' +
      '</div>' +
      '<div class="w-full mt-10">' +
      '<table class="w-full border-spacing-0">' +
      '<thead>' +
      '<tr>' +
      '<th class="font-bold text-left border-b">Mã số</th>' +
      '<th class="font-bold px-2 text-left border-b">Nguyên liệu</th>' +
      '<th class="font-bold px-2 text-left border-b">K.Lượng</th>' +
      '<th class="font-bold px-2 text-left border-b">Giá NL</th>' +
      '<th class="font-bold px-2 text-left border-b">Thành tiền</th>' +
      '<th class="font-bold px-2 text-left border-b" colspan="2">Dinh dưỡng</th>' +
      '</tr>' +
      '</thead>' +
      '<tbody>' +
      '<tr>' +
      `<td colspan="2" class="py-2 border-b-double">TOTAL</td>` +
      `<td class="px-2 py-2 font-bold border-b-double">${new DecimalPipe(
        'en-us'
      ).transform(totalWeight, '1.0-2')}</td>` +
      '<td class="py-2 border-b-double"></td>' +
      `<td class="px-2 py-2 font-bold border-b-double">${new DecimalPipe(
        'en-us'
      ).transform(totalPrice, '1.0-2')}</td>` +
      `<td colspan="2" rowspan="24" class="pl-2">Test thui nhes</td>` +
      '</tr>' +
      `${tableContent}` +
      '</tbody>' +
      '</table>' +
      '' +
      '' +
      '' +
      '</div>' +
      '';
    const windowPrt = window.open(
      '',
      '',
      'left=0,top=0,width=900,height=900,toolbar=0,scrollbars=0'
    );
    // @ts-ignore
    windowPrt.document.write(
      `<!DOCTYPE html><html><head>${printStyle}</head><body>${printContents}</body></html>`
    );
    // @ts-ignore
    windowPrt.document.close();
    // @ts-ignore
    windowPrt.focus();
    // @ts-ignore
    windowPrt.print();
    // @ts-ignore
    windowPrt.close();
  }

  onEdit(index: number): void {
    this.itemCalculates.at(index).patchValue({
      isEdit: true,
    });
  }

  onAddNewIng(): void {
    this.items.push(
      new FormGroup({
        ingName: new FormControl(),
        ingCode: new FormControl(),
        ingWeight: new FormControl(0),
        ingPrice: new FormControl(0),
        ingTotalPrice: new FormControl(0),
        isAddNew: new FormControl(true),
      })
    );
  }

  onRemoveIng(index: number): void {
    this.items.removeAt(index);
  }
}
