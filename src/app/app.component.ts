import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  cityName = 'Ciudad por Defecto';


  public search(cityName: string): void {
    this.cityName = cityName;
  }
}
