import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { FormsModule }   from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { CitySearchService } from './city-search.service';
import { WeatherForecastService } from './weather-forecast.service';
import { WeatherTableComponent } from './pages/weather-table/weather-table.component';

const routes: Routes = [

  { path: 'list', component: WeatherTableComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    WeatherTableComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  providers: [CitySearchService , WeatherForecastService],
  bootstrap: [AppComponent]
})
export class AppModule {}
export class AppRoutingModule {}
