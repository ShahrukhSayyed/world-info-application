import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Added for Router
import {RouterModule, Router} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CountryModule } from './country/country.module';


import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

//Added for toast message
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'ng2-toastr';


import { AppService } from './app.service'
import { AllCountryViewComponent } from './country/all-country-view/all-country-view.component';
import { SingleCountryViewComponent } from './country/single-country-view/single-country-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CountryModule,
    HttpClientModule,
    FormsModule,
    Ng4LoadingSpinnerModule,
    CommonModule,
    BrowserAnimationsModule,

    ToastModule.forRoot(),

    RouterModule.forRoot([
      {path :'home',component:HomeComponent},
      {path : '',redirectTo:'home',pathMatch:'full'},
      {path :'*',component:HomeComponent},
      {path :'**',component:HomeComponent},
      {path :'allCountry/:firstLevel/:secondLevel/:thirdLevel',component:AllCountryViewComponent},
      {path :'country/:countryName',component:SingleCountryViewComponent}

    ])

  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
