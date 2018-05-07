import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayDetailsComponent } from './display-details/display-details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DisplayDetailsComponent],
  exports: [
    DisplayDetailsComponent,
    CommonModule,
    FormsModule
  ]

})
export class SharedModule { }
