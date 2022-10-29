import { Component, OnInit } from '@angular/core';
import { GlobalVariable } from '../../../common/global-variable';
import { CommonService } from '../../../common/common.service';
import { Router } from '@angular/router';
import {
  GetManyIngredientEntityResponseDto,
  IngredientService,
} from '../../../services';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss'],
})
export class IngredientComponent implements OnInit {
  tableServiceParam: any = {
    limit: 10,
    page: 1,
    sort: ['createdAt,ASC'],
    filter: [],
  };
  result = new GetManyIngredientEntityResponseDto();

  constructor(
    private globalVariant: GlobalVariable,
    private common: CommonService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.globalVariant.setHeader({
      title: 'Danh sách nguyên liệu',
    });
    this.getIngredient();
  }
  getIngredient(): void {
    this.globalVariant.setIsLoading(true);
    IngredientService.getManyBase(this.tableServiceParam)
      .then((res) => {
        this.globalVariant.setIsLoading(false);
        this.result = res;
      })
      .catch((err) => {
        this.globalVariant.setIsLoading(false);
      });
  }
}
