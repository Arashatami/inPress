import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weatherCode'
})
export class WeatherCodePipe implements PipeTransform {

  transform(value: number): string {
    debugger
    if (value === 0)
      return "Clear sky";
    else if (value === 1 || value === 2 || value === 3)
      return "Mainly clear, partly cloudy, and overcast";
    else if (value === 45 || value === 48)
      return "Fog and depositing rime fog";
    else if (value === 51 || value === 53 || value === 55)
      return "Drizzle: Light, moderate, and dense intensity";
    else if (value === 56 || value === 57)
      return "Freezing Drizzle: Light and dense intensity";
    else if (value === 61 || value === 63 || value === 65)
      return "Rain: Slight, moderate and heavy intensity";
    else if (value === 66 || value === 67)
      return "Freezing Rain: Light and heavy intensity";
    else if (value === 71 || value === 73 || value === 75)
      return "Snow fall: Slight, moderate, and heavy intensity";
    else if (value === 77)
      return "Snow grains";
    else if (value === 80 || value === 81 || value === 82)
      return "Rain showers: Slight, moderate, and violent";
    else if (value === 85 || value === 86)
      return "Snow showers slight and heavy";
    else if (value === 95)
      return "Thunderstorm: Slight or moderate";
    else if (value === 96 || value === 99)
      return "Thunderstorm with slight and heavy hail";
    else
      return "";
  }

}
