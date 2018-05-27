import { Component, OnInit } from '@angular/core';
import {Weather} from '../weather.model';
import {Forescast} from '../forecast-model';

@Component({
  selector: 'app-aweather',
  templateUrl: './aweather.component.html',
  styleUrls: ['./aweather.component.css']
})
export class AweatherComponent implements OnInit {

  weather: Weather = new Weather();

  constructor() { }

  ngOnInit() {
    console.log('ngOnInit');
 //   setTimeout(() => {
      this.weather.city = 'Madrid';
      this.weather.date = 'Tue, 01 May 2018 06:00 PM CEST';
      this.weather.humidity = 32;
      this.weather.info = 'Nublado';
      this.weather.maxtemperature = 24;
      this.weather.mintemperature = 10;
      this.weather.pressure = 1080;
      this.weather.sunrise = '6:58 am';
      this.weather.sunset = '11:40 pm';
      this.weather.temperature = 18;
      this.weather.winddirection = 270;
      this.weather.windspeed = 26;
      this.weather.rutaImage = 'https://drive.google.com/uc?id=1DRGmofyk2KbKvY8HF8vvqcBGj7VRXKnY';
      this.weather.forecasts = new Forescast();
      this.weather.forecasts.date = '04 May 2018';
      this.weather.forecasts.day = 'Fri';
      this.weather.forecasts.info = 'Mostly Cloudy';
      this.weather.forecasts.maxTemperature = 23;
      this.weather.forecasts.minTemperature = 8;
      console.log('call to server finalizado');
      console.log(this.weather);
 //   }, 3000);
    console.log(this.weather);
  }

}
