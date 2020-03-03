import { Component, OnInit } from '@angular/core';

import { CitySearchService } from './city-search.service';
import { CurrentWeatherService } from './current-weather.service';
import { WeatherForecastService } from './weather-forecast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.findCity.html',
  inputs: ['item.cityName']
})

export class AppComponent implements OnInit {

  item: any;

  body: any;

  cities: any;

  weather: any;

  forecast: any;

  today: number = Date.now();



  constructor(private citySearchService: CitySearchService, private currentWeatherService: CurrentWeatherService, private weatherForecastService : WeatherForecastService){}


ngOnInit(){
  this.item = {};
}


send(item : any,){

  this.citySearchService.send(item).subscribe(response => { let {list} = response ;  this.cities = list})
    };

  idWeather(cityid : any){

    return this.currentWeatherService.idWeather(cityid).subscribe(response => { this.weather = [response]})

    };

    listForecast(cityid : any){


     return this.weatherForecastService.listForecast(cityid).subscribe(response => { this.forecast = response.list})

      };
}
