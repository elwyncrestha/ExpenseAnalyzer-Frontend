import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MainRoutingModule} from './main-routing.module';
import {MainLayoutComponent} from './component/main-layout/main-layout.component';
import {AngularMaterialModule} from '../../@theme/angular-material/angular-material.module';
import {ProfileComponent} from './component/profile/profile.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [MainLayoutComponent, ProfileComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ],
  entryComponents: [ProfileComponent]
})
export class MainModule {
}
