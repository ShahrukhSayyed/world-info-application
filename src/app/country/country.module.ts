import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCountryViewComponent } from './all-country-view/all-country-view.component';
import { SingleCountryViewComponent } from './single-country-view/single-country-view.component';

import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

import { NgxPaginationModule } from 'ngx-pagination';
import { FilterDataPipe } from '../filter-data.pipe';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { OrderModule } from 'ngx-order-pipe';

//Added for toast message
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    OrderModule,

    ToastModule.forRoot(),
    RouterModule.forChild([
      {
        path: 'allCountry/:firstLevel/:secondLevel/:thirdLevel',
        component: AllCountryViewComponent,
      },
      {
        path: 'country/:countryName',
        component: SingleCountryViewComponent,
      },

    ]),


  ],
  declarations: [AllCountryViewComponent, SingleCountryViewComponent,FilterDataPipe]
})
export class CountryModule { }
