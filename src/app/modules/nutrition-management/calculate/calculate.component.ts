import { Component, OnInit } from '@angular/core';
import { GlobalVariable } from '../../../common/global-variable';
import { CommonService } from '../../../common/common.service';
import { Router } from '@angular/router';
import {
  CalculateRequestDto,
  EnumCalculateRequestDtoAnimalType,
  GetManyIngredientEntityResponseDto,
  IngredientCalculateService,
  IngredientEntity,
  IngredientRequest,
  IngredientService,
} from '../../../services';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { DecimalPipe, formatNumber } from '@angular/common';
import { debounceTime } from 'rxjs';

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
        if (curr.unit === '%') total += Number(curr.ingTotalPrice || 0);
        return total;
      }, 0) || 0;
    this.totalWeight =
      this.items.value?.reduce((total: any, curr: any) => {
        if (curr.unit === '%') total += Number(curr.ingWeight || 0);
        return total;
      }, 0) || 0;
  }

  onValueChange(): void {
    this.items.controls?.map((control, index) => {
      control
        ?.get('ingWeight')
        ?.valueChanges.pipe(debounceTime(400))
        .subscribe((value) => {
          control.patchValue({
            ingTotalPrice:
              Number(value || 0) * Number(control.value.ingPrice || 0),
          });
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
    const abcs = {
      DryMatter: {
        code: 'DryMatter',
        name: 'Vật chất khô',
        unit: '%',
        value: 92.05641135191306,
      },
      ME: {
        code: 'ME',
        name: 'ME, Heo',
        unit: 'Kcal/kg',
        value: 3449.29351963141,
      },
      CrudeProtein: {
        code: 'CrudeProtein',
        name: 'Đạm thô',
        unit: '%',
        value: 19.36974338384775,
      },
      Fat: {
        code: 'CrudeFat',
        name: 'Béo',
        unit: '%',
        value: 2.6273461274611645,
      },
      CrudeFiber: {
        code: 'CrudeFiber',
        name: 'Xơ thô',
        unit: '%',
        value: 1.730215398929058,
      },
      LysineTotal: {
        code: 'CrudeFiber',
        name: 'Lysine, Total',
        unit: '%',
        value: 1.1510256429513295,
      },
      MethionineTotal: {
        code: 'MethionineTotal',
        name: 'Methionine, Total',
        unit: '%',
        value: 0.36999999712675047,
      },
      MetCysTotal: {
        code: 'MetCysTotal',
        name: 'Met + Cys, Total',
        unit: '%',
        value: 0.71205129302465,
      },
      ThreonineTotal: {
        code: 'ThreonineTotal',
        name: 'Threonine, Total',
        unit: '%',
        value: 0.7974358930801734,
      },
      TryptophanTotal: {
        code: 'TryptophanTotal',
        name: 'Tryptophan, Total',
        unit: '%',
        value: 0.24564102941598648,
      },
      Lactose: {
        code: 'Lactose',
        name: 'Lactose',
        unit: '%',
        value: 7.17948717948718,
      },
      LYS_TH: {
        code: 'LYS_TH',
        name: 'LYS, TH Heo',
        unit: '%',
        value: 1.0225461228535726,
      },
      MET_TH: {
        code: 'MET_TH',
        name: 'MET, TH Heo',
        unit: '%',
        value: 0.3353846149566846,
      },
      MC_TH: {
        code: 'MC_TH',
        name: 'M+C, TH Heo',
        unit: '%',
        value: 0.6255769454515897,
      },
      THR_TH: {
        code: 'THR_TH',
        name: 'THR, TH Heo',
        unit: '%',
        value: 0.6940256200539761,
      },
      TRP_TH: {
        code: 'TRP_TH',
        name: 'TRP, TH Heo',
        unit: '%',
        value: 0.21641025959681243,
      },
      Calcium: {
        code: 'Calcium',
        name: 'Calcium (Ca)',
        unit: '%',
        value: 0.2623307690597497,
      },
      PhosphorusTotal: {
        code: 'PhosphorusTotal',
        name: 'Phosphorus, Total',
        unit: '%',
        value: 0.4099897360190367,
      },
      PhosphorusAvail: {
        code: 'PhosphorusAvail',
        name: 'Phosphorus, availability',
        unit: '%',
        value: 0.16351281794217917,
      },
      Sodium: {
        code: 'Sodium',
        name: 'Sodium (Na)',
        unit: '%',
        value: 0.02059743543848013,
      },
      Chloride: {
        code: 'Chloride',
        name: 'Chloride (Cl)',
        unit: '%',
        value: 0.04054615360039931,
      },
      Salt: {
        code: 'Salt',
        name: 'Muối (NaCl)',
        unit: '%',
        value: 0,
      },
      LinoleicAcid: {
        code: 'LinoleicAcid',
        name: 'Linoleic Acid',
        unit: '%',
        value: 0.6978794764249753,
      },
    };
    Object.keys(abcs).map((key) => {
      // @ts-ignore
      this.itemCalculates.push(
        new FormGroup({
          // @ts-ignore
          name: new FormControl(abcs[key].code),
          // @ts-ignore
          value: new FormControl(
            // @ts-ignore
            formatNumber(abcs[key].value, 'en-us', '1.0-2')
          ),
          // @ts-ignore
          unit: new FormControl(abcs[key].unit),
          isEdit: new FormControl(false),
        })
      );
    });
    this.getTotalPercentage();
    // IngredientCalculateService.ingredientCalculateControllerCalculateNutrition({
    //   body: request,
    // })
    //   .then((res) => {
    //     Object.keys(res)?.map((key: string) => {
    //       this.itemCalculates.push(
    //         new FormGroup({
    //           // @ts-ignore
    //           name: new FormControl(res[key]),
    //           // @ts-ignore
    //           value: new FormControl(res[key]),
    //           // @ts-ignore
    //           unit: new FormControl(res[key]),
    //         })
    //       );
    //     });
    //   })
    //   .catch((err) => {});
  }

  onPrint(): void {}

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
