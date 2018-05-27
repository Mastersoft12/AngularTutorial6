import {Component, Input, OnInit} from '@angular/core';
import {Forescast} from '../forecast-model';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent implements OnInit {

  @Input() forecast: Forescast;
  constructor() { }

  ngOnInit() {
  }

}
