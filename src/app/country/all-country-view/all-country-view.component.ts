import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

//From NPM modules
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

//Location services
import { Location } from '@angular/common';

//Added for toast message
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { AppService } from '../../app.service'

import { FormatData } from '../../country/format-data';


@Component({
  selector: 'app-all-country-view',
  templateUrl: './all-country-view.component.html',
  styleUrls: ['./all-country-view.component.css']

})
export class AllCountryViewComponent implements OnInit {
  public regionalCountries: FormatData[];
  public region: string;
  public foundCountries: number;
  order: string = 'item.name';
  reverse: boolean = false;
  selectedRegionName: string;
  nameValue:string;
  p:number;
  constructor(private _route: ActivatedRoute, private router: Router,
    public appService: AppService, private spinnerService: Ng4LoadingSpinnerService,
    private location: Location, public toastr: ToastsManager, vcr: ViewContainerRef) {

    this.toastr.setRootViewContainerRef(vcr);
    //console.log("All country View Router Calling");

  }


  ngOnInit() {
    //console.log("All country View NgOnInit called");

    this._route.params.subscribe(param => {
      this.spinnerService.show();

      this.regionalCountries = [];

      let firstLevel = this._route.snapshot.paramMap.get('firstLevel');
      let secondLevel = this._route.snapshot.paramMap.get('secondLevel');
      let thirdLevel = this._route.snapshot.paramMap.get('thirdLevel');

      this.getAllCountries(firstLevel, secondLevel, thirdLevel); //function calling
    });
  }

  public getAllCountries = (firstLevel: string, secondLevel: string, thirdLevel: string): any => {
    this.appService.getAllCountries(firstLevel, secondLevel, thirdLevel).subscribe(   //this is getting book data
      data => {
        setTimeout(() => {
          this.regionalCountries = data;
          this.foundCountries = this.regionalCountries.length;
          //console.log('Countries Found');
          //console.log(this.foundCountries);
          this.toastr.info(`${this.foundCountries} Countries are there !`);

          this.spinnerService.hide();

        }, 2000);  //passsing to get detail function

      },
      error => {
        console.log(error.errorMessage);
        this.spinnerService.hide();
        this.toastr.error(`Not Found !`);
        this.router.navigate([`/`]);

      });

      if (secondLevel == 'Americas' || secondLevel == 'Oceania' || secondLevel == 'Asia' || secondLevel == 'Africa' || secondLevel == 'Europe') {
        this.region = secondLevel;
        this.toastr.success(`Welcome to the ${this.region} region`);
        this.selectedRegionName = this.region;
      }
      else if (firstLevel == 'currency') {
        this.region = 'Currency';
        this.toastr.success(`${thirdLevel} currency applied !`);

      }
      else if (firstLevel == 'lang') {
        this.region = 'Language';
        this.toastr.success(`${thirdLevel} language applied !`);

      }

  }

  public goBack = (): any => {
    this.location.back();
  }

  public setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
      this.showSuccess(this.reverse);
    }

    this.order = value;
  }

  public showSuccess(value: boolean) {
    if (value == true) {  
      this.toastr.success('Data Sorted ! In a Descending way !');
    }
    else {
      this.toastr.success('Data Sorted ! In a Ascending way!');
    }
  }

  public onOptionsSelected(event) {
    //this.getAllCountries('region',event,'all');
    this.router.navigate([`/allCountry/region/${event}/all`]);

  }
}
