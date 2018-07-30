# Angular Application - World Info Application 

Angular is a platform that makes it easy to build applications with the web. Angular combines declarative templates, dependency injection, end to end tooling, and integrated best practices to solve development challenges. Angular empowers developers to build applications that live on the web, mobile, or the desktop

This Public API documentation gives you detailed information about various countries.

https://restcountries.eu/


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Note : You can skip this steps if you have Node ,npm and angularCLI installed on your system.
 
1) To start with this, install node and npm

* [NodeJs](https://nodejs.org/en/) - How to install node?

2) Install git 


* [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) - How to install Git?

3) Use npm to install Angular CLI . Exceute this command

```
>npm install -g @angular/cli
```

 
### Installing/ Running locally


1) Create a folder named as world-info-app at any local drive

2) change directory to world-info-app

```
>cd world-info-app
```

3) Fetch the source code from my github library
 
```
>git init
```

```
>git remote add origin https://github.com/ShahrukhSayyed/world-info-application.git
```

```
>git pull origin master
```

4) Install all the modules required to run the given application with following command

```
>npm install
```

5) Run the application by using following command

```
>ng serve --open
```

6) Navigate to http://localhost:4200/ via browser . You will see the application is running.


* [Demo](http://world-info-app.shahrukhsayyed.tech/) - Application is up and running here

## More about the application

Application is having following views -

1) All regions view

 - A beautiful looking view displaying all the regions in the world.On clicking one of the regions, All Countries view should open


2) All countries view 
​
- This will display all the countries of the selected region.
​ 
  There will be option to go back to previous view as well. This view will display countries in format of bootstrap cards with country flags as the image of the card and will display only the important details of that particular country like Name, Capital, timezone, Currency, Subregions etc. On clicking on a particular country in country
view, a detailed view of that country will open.


3) Single Country view 

- This view will use the flag of the country as cover image and display all the information about the countries in different and well differentiated sections of the page.


4) Currency Filter 
- On clicking on currency name in any of the above view, all countries view will open again but this time with a currency filter applied. i.e
it will display that currency filter has been applied, show the selected currency and will show the country list which have the same currency(irrespective of the
region)



5) Language Filter 

- On clicking a particular language in any of the above views, All countries view will open again, but this time with a language filter applied.
i.e it will display the countries which have the selected language (irrespective of the region).


## Built With

* [Angular](https://angular.io/) - The web framework used for Frontend Design
* [NPM](https://www.npmjs.com/) - Most of the modules are used

## Authors

* **Shahrukh Sayyed** - *Initial work* - [ShahrukhSayyed](https://github.com/ShahrukhSayyed)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for detailsg

## Acknowledgments

* Thanks for Edwisor to review this application.
* I would like to thank my friends for supporting me to complete this Application.

