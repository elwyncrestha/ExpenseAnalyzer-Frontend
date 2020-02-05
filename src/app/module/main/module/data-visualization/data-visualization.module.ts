import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoryChartComponent} from './component/category-chart/category-chart.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {TransactionTypeChartComponent} from './component/transaction-type-chart/transaction-type-chart.component';


@NgModule({
  declarations: [CategoryChartComponent, TransactionTypeChartComponent],
  imports: [
    CommonModule,
    NgxChartsModule
  ],
  exports: [CategoryChartComponent, TransactionTypeChartComponent]
})
export class DataVisualizationModule {
}
