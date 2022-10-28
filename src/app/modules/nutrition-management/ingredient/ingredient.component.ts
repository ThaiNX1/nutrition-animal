import { Component, OnInit } from '@angular/core';
import { GlobalVariable } from '../../../common/global-variable';
import { CommonService } from '../../../common/common.service';
import { Router } from '@angular/router';
import { GetManyIngredientEntityResponseDto } from '../../../services';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss'],
})
export class IngredientComponent implements OnInit {
  data = new GetManyIngredientEntityResponseDto();

  constructor(
    private globalVariant: GlobalVariable,
    private common: CommonService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.globalVariant.setHeader({
      title: 'Danh sách nguyên liệu',
    });
  }
}
