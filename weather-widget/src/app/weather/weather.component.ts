import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {
  city = '';
  unit: 'C' | 'F' = 'F';
  loading = false;
  weather: any;

  constructor(private weatherService: WeatherService) {}

  async fetchWeather() {
    this.loading = true;
    this.weather = null;

    try {
      const data = await this.weatherService.getWeather(this.city, this.unit);
      this.weather = data;
      this.city ='';
    } catch (error) {
      console.error('Error fetching weather:', error);
    } finally {
      this.loading = false;
    }
  }

  saveFavorite() {
    localStorage.setItem('favoriteCity', this.city);
  }

  ngOnInit() {
    const savedCity = localStorage.getItem('favoriteCity');
    if (savedCity) {
      this.city = savedCity;
      this.fetchWeather();
    }
  }
}
