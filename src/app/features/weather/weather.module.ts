import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './weather.component';
import { WeatherEffects, weatherReducer } from 'src/app/shared/store/weather';
import { CityEffects, cityReducer } from 'src/app/shared/store/city';
import { WeatherCacheService, WeatherService } from 'src/app/shared/services/weather.service';
import { CityService, CityCacheService } from 'src/app/shared/services/city.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [
    WeatherComponent
  ],
  providers: [
    WeatherCacheService,
    CityCacheService,
    WeatherService,
    CityService,
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    StoreModule.forFeature('weather', { weatherReducer }),
    StoreModule.forFeature('searchCity', { cityReducer }),
    EffectsModule.forFeature([CityEffects, WeatherEffects])
  ],
  exports: [
    WeatherComponent
  ]
})
export class WeatherModule { }
