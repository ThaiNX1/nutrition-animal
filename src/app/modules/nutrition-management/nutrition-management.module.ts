import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NutritionManagementRoutingModule } from './nutrition-management-routing.module';
import { IngredientComponent } from './ingredient/ingredient.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { FormsModule } from '@angular/forms';
import { CalculateComponent } from './calculate/calculate.component';

@NgModule({
  declarations: [IngredientComponent, CalculateComponent],
  imports: [
    CommonModule,
    FormsModule,
    NutritionManagementRoutingModule,
    NzTableModule,
    NzButtonModule,
    NzButtonModule,
    NzPopconfirmModule,
    NzEmptyModule,
    NzTagModule,
    NzIconModule,
    NzPopconfirmModule,
    NzGridModule,
    NzFormModule,
    NzSelectModule,
    NzCardModule,
    NzInputModule,
    NzDatePickerModule,
  ],
})
export class NutritionManagementModule {}
