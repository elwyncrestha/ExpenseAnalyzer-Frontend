import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';

const COMPONENTS = [];
const MODULES = [
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatTableModule,
  MatIconModule,
  MatTabsModule
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, ...MODULES],
  exports: [...COMPONENTS, ...MODULES]
})
export class AngularMaterialModule {
}
