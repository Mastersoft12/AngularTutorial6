import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent implements OnInit {

  loading: boolean;
  @Output() searchEvent: EventEmitter<string> = new EventEmitter<string>();
  cityName: string;
  constructor() { }

  ngOnInit() {
    this.loading = false;
  }

  public searchCity() {
    this.loading = !this.loading;
    this.searchEvent.emit(this.cityName);
  }

}
