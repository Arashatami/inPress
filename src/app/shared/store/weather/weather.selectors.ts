import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WeatherState, weatherFeatureName } from './weather.reducer';

export const weatherFeatureState = createFeatureSelector<WeatherState>(weatherFeatureName);

/**
 * Get loginHistories
 */
export const GetloginHistories = createSelector(
  weatherFeatureState,
  (state: WeatherState) => state.weather
);
