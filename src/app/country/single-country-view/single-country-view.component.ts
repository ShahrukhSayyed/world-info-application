import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

//From NPM modules
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

//Location services
import { Location } from '@angular/common';

//Added for toast message
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule, ToastsManager } from 'ng2-toastr';

import { AppService } from '../../app.service'

import { DisplayDetailsComponent } from '../../shared/display-details/display-details.component'


@Component({
  selector: 'app-single-country-view',
  templateUrl: './single-country-view.component.html',
  styleUrls: ['./single-country-view.component.css']
})
export class SingleCountryViewComponent implements OnInit {
  countryName: any;
  public countryDetails;
  public simplifiedTranslation: any[] = [];
  public simplifiedKeys: any[] = [];
  public countryFlag: string;

  constructor(private _route: ActivatedRoute, private router: Router, public appService: AppService, 
    private spinnerService: Ng4LoadingSpinnerService, private location: Location, 
    public toastr: ToastsManager, vcr: ViewContainerRef) {
    
      this.toastr.setRootViewContainerRef(vcr);
      //console.log("Single country View Router Calling");
  }

  ngOnInit() {
    //console.log("Single country View NgOnInit called");

    this._route.params.subscribe(param => {
      this.spinnerService.show();

      let countryCode = this._route.snapshot.paramMap.get('countryName');

      this.countryDetails = this.appService.getCountryDetailsByCode(countryCode).subscribe(   //this is getting book data
        data => {
          setTimeout(() => {
            this.countryDetails = data;
            this.getSimplifyTranslations(this.countryDetails.translations);
            this.countryFlag = this.countryDetails.flag;
            this.countryName = this.countryDetails.name;
            //console.log('Country Found');
            //console.log(this.countryDetails);
            this.toastr.success(`Welcome to the ${this.countryName} `);

            this.spinnerService.hide();

          }, 2000);  //passsing to get detail function

        },
        error => {
          console.log(error.errorMessage);
        });
    });

  }
  //method to get translation proprty
  public getSimplifyTranslations = (data): any => {
    this.simplifiedTranslation = [];
    for (let item in data) {
      if (data[item] != null || data[item] != undefined) {
        let temp = item + " => " + data[item]
        //this.simplifiedKeys.push(item);
        this.simplifiedTranslation.push(temp);
      }
    }

    //console.log(this.simplifiedTranslation)
  }
  public goBack = (): any => {
    this.location.back();
  }

}
