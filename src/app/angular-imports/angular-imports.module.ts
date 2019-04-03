import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatSliderModule,
  MatIconModule} from '@angular/material';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // botones
    MatButtonModule,
    // Iconos
    MatIconModule,
    // Slider
    MatSliderModule
  ],
  exports : [
    MatButtonModule,
    MatIconModule,
    MatSliderModule
  ]
})
export class AngularImportsModule { }
