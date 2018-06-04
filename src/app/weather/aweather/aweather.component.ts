import { Component, OnInit } from '@angular/core';
import {Weather} from '../weather.model';
import {Forescast} from '../forecast-model';
import {WeatherService} from '../services/weather.service';

@Component({
  selector: 'app-aweather',
  templateUrl: './aweather.component.html',
  styleUrls: ['./aweather.component.css']
})
export class AweatherComponent implements OnInit {

  weather: Weather = new Weather();

  constructor(private _weather_services: WeatherService) { }

  ngOnInit() {
   this._weather_services.getWeatherInfo('Madrid, ES').subscribe(
      data => {
        if (data['query'].results === undefined) {
          alert('La ciudad buscada no existe');
        } else {
          this.weather = this._weather_services.mapResult(data['query'].results.channel);
        }
      }
    );

  /*  this._weather_services.getPersona().subscribe(
      data => {this._weather_services.mapResultPersona(data); } );*/
 }


  public getColorTemperature(): string {
    if (this.weather !== undefined && this.weather.temperature >= 24) {
      return '#EF6C00';
    }

    if (this.weather !== undefined && this.weather.temperature <= 10) {
      return '#0277BD';
    }

    return '#212121';
  }

}
