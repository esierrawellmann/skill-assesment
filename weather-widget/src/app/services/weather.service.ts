import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private API_KEY = '0dc76996efbb401786a231050252104'; // Replace with your API key
  private BASE_URL = 'https://api.weatherapi.com/v1';

  async getWeather(city: string, unit: 'C' | 'F') {
    const url = `${this.BASE_URL}/forecast.json?key=${this.API_KEY}&q=${city}&days=5`;
    const response = await axios.get(url);
    return response.data;
  }
}
