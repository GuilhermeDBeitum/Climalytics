import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-weather-table',
  templateUrl: './weather-table.component.html',
})
export class WeatherTableComponent implements OnInit {

  cities : any

  weather: any;

  forecast: Array<any>;

  today: number = Date.now();

  constructor(){}

  ngOnInit(): void {

  }


}
