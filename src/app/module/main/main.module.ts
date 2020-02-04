import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MainRoutingModule} from './main-routing.module';
import {MainLayoutComponent} from './component/main-layout/main-layout.component';
import {AngularMaterialModule} from '../../@theme/angular-material/angular-material.module';
import {ProfileComponent} from './component/profile/profile.component';
import {CoreModule} from '../../@core/core.module';


@NgModule({
  declarations: [MainLayoutComponent, ProfileComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    AngularMaterialModule,
    CoreModule
  ],
  entryComponents: [ProfileComponent]
})
export class MainModule {
}
