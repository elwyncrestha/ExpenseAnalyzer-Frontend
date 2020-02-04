import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CheckEmptyPipe} from './pipe/check-empty.pipe';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [CheckEmptyPipe],
  exports: [
    CheckEmptyPipe,
    ReactiveFormsModule,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class CoreModule {
}
