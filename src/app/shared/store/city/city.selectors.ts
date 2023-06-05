import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SearchCityrState, cityFeatureName } from './city.reducer';

export const searchCityFeatureState = createFeatureSelector<SearchCityrState>(cityFeatureName);

/**
 * Get loginHistories
 */
export const SearchCity = createSelector(
  searchCityFeatureState,
  (state: SearchCityrState) => state.resultCities
);
