import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {

  cities: Array<string> = new Array<string>();

  constructor() { }

  ngOnInit() {
    this.cities.push('Sahagun, Sh');
    this.cities.push('Medellin, Me');
    this.cities.push('Monteria, Mo');
  }
}
