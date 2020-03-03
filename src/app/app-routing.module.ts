import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeatherTableComponent } from './pages/weather-table/weather-table.component';


const routes: Routes = [
  { path: 'list', component: WeatherTableComponent}

]

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

  export class AppRoutingModule {}
