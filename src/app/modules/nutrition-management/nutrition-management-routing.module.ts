import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { IngredientComponent } from './ingredient/ingredient.component';
import { CalculateComponent } from './calculate/calculate.component';

const routes: Routes = [
  {
    path: 'ingredient',
    component: IngredientComponent,
  },
  {
    path: 'calculate',
    component: CalculateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NutritionManagementRoutingModule {}
