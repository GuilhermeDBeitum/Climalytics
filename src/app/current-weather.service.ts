import { Injectable, EventEmitter } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})

export class CurrentWeatherService {

  //emitWeather = new EventEmitter<String>()

  weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?'
  appId= 'appid=76d1b43ba3695cfae59aa9f7dc9b4877'

  constructor(private http: HttpClient) {}


idWeather(cityid:any)  {
  let url = new String(this.weatherUrl);
  url = url.concat("id=",cityid, "&", this.appId, "&units=metric");
  return this.http.get<Array<[any]>>(url.toString())
  //this.emitWeather.emit(cityid)
}
}
