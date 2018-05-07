import { Injectable } from '@angular/core';

//Added for Http and Observables
import { HttpClient, HttpClientModule, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import { FormatApiInterface } from './format-api-interface';


@Injectable()
export class AppService implements FormatApiInterface{
  public baseUrl = "https://restcountries.eu";

  constructor(private _http: HttpClient) { 
    //console.log("AppService is called");
  }

    //method to handle http calls
    public handleError(err: HttpErrorResponse) {
      console.log("Handle error HTTP calls");
      console.log(err.message);
      return Observable.throw(err.message);
    }
  
    public getAllCountries(firstLevel,secondLevel,thirdLevel): Observable<any> {
      return this._http.get(`${this.baseUrl}/rest/v2/${firstLevel}/${secondLevel}?fields=name;region;capital;currencies;subregion;timezones;population;languages;flag;alpha3Code`)
        .do(data => console.log('Message from AppService : Countries Found'))
        .catch(this.handleError);
    } // end getAllCountries function


    public getCountryDetailsByName(countryName): Observable<any> {
      return this._http.get(`${this.baseUrl}/rest/v2/name/${countryName}?fullText=true`)
        .do(data => console.log('Message from AppService : Single Country Found'))
        .catch(this.handleError);
    } // end getCountryDetailsByName function

    public getCountryDetailsByCode(countryCode): Observable<any> {
      return this._http.get(`${this.baseUrl}/rest/v2/alpha/${countryCode}`)
        .do(data => console.log('Message from AppService : Single Country Found'))
        .catch(this.handleError);
    } // end getCountryDetailsByCode function
    
}
