import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { WeatherSearchComponent } from './weather-search/weather-search.component';
import {AweatherComponent} from './aweather/aweather.component';
import {WeatherService} from './services/weather.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    AweatherComponent,
    WeatherForecastComponent,
    WeatherSearchComponent,
  ],
  exports: [
    AweatherComponent,
    WeatherSearchComponent,
    HttpClientModule
  ],
  providers: [WeatherService]
})
export class WeatherModule { }
