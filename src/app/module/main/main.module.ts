import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MainRoutingModule} from './main-routing.module';
import {MainLayoutComponent} from './component/main-layout/main-layout.component';
import {AngularMaterialModule} from '../../@theme/angular-material/angular-material.module';


@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    AngularMaterialModule
  ]
})
export class MainModule {
}
