
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as CityActions from './city.actions';
import { CityModel } from '../../models/city.model';
import { CityService } from '../../services/city.service';




@Injectable({
  providedIn: 'root'
})

export class CityEffects {

  constructor(
    private actions$: Actions,
    private cityService: CityService
  ) { }

  searchCity = createEffect(() =>
    this.actions$.pipe(
      ofType(CityActions.searchCity),
      switchMap((text: string) => this.cityService.searchCity(text).pipe(
        map((resultCities: CityModel[]) => CityActions.searchCitySuccess({ resultCities })),
        catchError(err => of(CityActions.searchCityError({ errorMessage: err })))
      ))
    )
  );

}
