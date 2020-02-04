import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoryChartComponent} from './component/category-chart/category-chart.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';


@NgModule({
  declarations: [CategoryChartComponent],
  imports: [
    CommonModule,
    NgxChartsModule
  ],
  exports: [CategoryChartComponent]
})
export class DataVisualizationModule {
}
