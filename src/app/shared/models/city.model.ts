export interface CityModel {
  id: number,
  name: string,
  latitude: number,
  longitude: number,
  elevation: number,
  feature_code: string,
  country_code: string,
  admin1_id: number,
  timezone: string,
  population: number,
  country_id: number,
  country: string,
  admin1: string
}

export interface ResponseCityModel {
  results: CityModel[]
}