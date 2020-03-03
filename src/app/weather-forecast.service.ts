import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})

export class WeatherForecastService {

  forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?';
  appId= 'appid=76d1b43ba3695cfae59aa9f7dc9b4877'

  constructor(private http: HttpClient) { }


listForecast(cityid:any) {
  let url = new String(this.forecastUrl);
  url = url.concat("id=",cityid, "&", this.appId, "&units=metric");
  return this.http.get<[any]>(url.toString())
}
}
