import { Component, OnInit } from '@angular/core';
import { GlobalVariable } from '../../../common/global-variable';
import { CommonService } from '../../../common/common.service';
import { Router } from '@angular/router';
import {
  EnumCalculateRequestDtoAnimalType,
  GetManyIngredientEntityResponseDto,
  IngredientEntity,
  IngredientService,
} from '../../../services';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

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
      items: new FormArray([
        new FormGroup({
          ingName: new FormControl(),
          ingCode: new FormControl(),
          ingWeight: new FormControl(),
          ingPrice: new FormControl(),
          ingTotalPrice: new FormControl(),
        }),
      ]),
      itemCalculates: new FormArray([
        new FormGroup({
          code: new FormControl(),
          name: new FormControl(),
          value: new FormControl(),
          unit: new FormControl(),
        }),
      ]),
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
        console.log('ingredients', this.ingredients);
      })
      .catch((err) => {
        this.globalVariant.setIsLoading(false);
      });
  }

  onCheckIng(ing?: any): void {}
}
