import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CategoryRoutingModule} from './category-routing.module';
import {CategoryComponent} from './component/category/category.component';
import {AngularMaterialModule} from '../../../../@theme/angular-material/angular-material.module';
import {CoreModule} from '../../../../@core/core.module';
import {CategoryFormComponent} from './component/category-form/category-form.component';


@NgModule({
  declarations: [CategoryComponent, CategoryFormComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    AngularMaterialModule,
    CoreModule
  ],
  entryComponents: [CategoryFormComponent]
})
export class CategoryModule {
}
