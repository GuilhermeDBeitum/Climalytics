import { Injectable, EventEmitter } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class CitySearchService {

  //emitCities = new EventEmitter<String>()

  //static makeCity = new EventEmitter<String>()

  citiesUrl = 'https://api.openweathermap.org/data/2.5/find?'
  appId= 'appid=76d1b43ba3695cfae59aa9f7dc9b4877'

  constructor(private http: HttpClient) {}

send(item:any) {
  let url = new String(this.citiesUrl);
  url = url.concat("q=",item, "&", this.appId, "&units=metric");
  return this.http.get<Array<[any]>>(url.toString())

  // this.emitCities.emit(item)
}
}
