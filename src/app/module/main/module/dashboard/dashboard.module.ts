import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './component/dashboard/dashboard.component';
import {DataVisualizationModule} from '../data-visualization/data-visualization.module';
import {AngularMaterialModule} from '../../../../@theme/angular-material/angular-material.module';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DataVisualizationModule,
    AngularMaterialModule
  ]
})
export class DashboardModule {
}
