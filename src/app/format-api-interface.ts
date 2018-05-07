export interface FormatApiInterface{
    baseUrl : string;
    getAllCountries (firstLevel,secondLevel,thirdLevel): any ;
    handleError(err) : any;
    getCountryDetailsByName(countryName) :any;
    getCountryDetailsByCode(countryCode):any;
}
