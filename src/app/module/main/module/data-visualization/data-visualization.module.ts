import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoryChartComponent} from './component/category-chart/category-chart.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {TransactionTypeChartComponent} from './component/transaction-type-chart/transaction-type-chart.component';
import {TransactionByDurationChartComponent} from './component/transaction-by-duration-chart/transaction-by-duration-chart.component';

const COMPONENTS = [
  CategoryChartComponent,
  TransactionTypeChartComponent,
  TransactionByDurationChartComponent
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule,
    NgxChartsModule
  ],
  exports: [COMPONENTS]
})
export class DataVisualizationModule {
}
