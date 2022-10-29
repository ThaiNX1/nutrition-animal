import { Component, OnInit } from '@angular/core';
import { GlobalVariable } from '../../../common/global-variable';
import { CommonService } from '../../../common/common.service';
import { Router } from '@angular/router';
import {
  GetManyIngredientEntityResponseDto,
  IngredientEntity,
  IngredientService,
} from '../../../services';

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

  constructor(
    private globalVariant: GlobalVariable,
    private common: CommonService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.globalVariant.setHeader({
      title: 'Tính toán dinh dưỡng',
    });
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
