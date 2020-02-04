import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CategoryRoutingModule} from './category-routing.module';
import {CategoryComponent} from './component/category/category.component';
import {AngularMaterialModule} from '../../../../@theme/angular-material/angular-material.module';
import {CoreModule} from '../../../../@core/core.module';


@NgModule({
  declarations: [CategoryComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    AngularMaterialModule,
    CoreModule
  ]
})
export class CategoryModule {
}
