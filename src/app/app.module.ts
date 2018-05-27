import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConfiguracionComponenteComponent } from './configuracion-componente/configuracion-componente.component';
import { AweatherComponent } from './aweather/aweather.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatCardModule,
  MatButtonModule,
  MatDividerModule,
  MatGridListModule,
  MatProgressSpinnerModule,
  MatExpansionModule,
  MatInputModule,
} from '@angular/material';
import { MaterialTestComponent } from './material-test/material-test.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfiguracionComponenteComponent,
    AweatherComponent,
    MaterialTestComponent,
    WeatherForecastComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
