import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SliderModule } from "primeng/slider";

import { RangeSliderComponent } from './slider.component';
import { RangeSliderDirective } from './slider.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SliderModule,
  ],
  exports: [
    RangeSliderComponent,
  ],
  declarations: [
    RangeSliderComponent,
    RangeSliderDirective,
  ],
})
export class RangeSliderModule { }
