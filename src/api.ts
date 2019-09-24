import axios, { AxiosResponse } from 'axios';
import { format } from 'date-fns';
import { moscowWOEID } from './config';

export interface GetLocationDayResponseDataItem {
  id: number;
  weather_state_name: string;
  weather_state_abbr: string;
  wind_direction_compass: string;
  created: string;
  applicable_date: string;
  min_temp: number;
  max_temp: number;
  the_temp: any;
  wind_speed: number;
  wind_direction: number;
  air_pressure: any;
  humidity: number;
  visibility: number;
  predictability: number;
}

interface ConsolidatedWeather {
  id: number;
  weather_state_name: string;
  weather_state_abbr: string;
  wind_direction_compass: string;
  created: string;
  applicable_date: string;
  min_temp: number;
  max_temp: number;
  the_temp: number;
  wind_speed: number;
  wind_direction: number;
  air_pressure: number;
  humidity: number;
  visibility: number;
  predictability: number;
}

export interface GetLocationResponseData {
  consolidated_weather: ConsolidatedWeather[];
  time: string;
  sun_rise: string;
  sun_set: string;
  timezone_name: string;
  parent: object;
  sources: [];
  title: string;
  location_type: string;
  woeid: number;
  latt_long: string;
  timezone: string;
}

const instance = axios.create({
  baseURL:
    'https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

const getLocationRequest = async (): Promise<AxiosResponse> => {
  const response = await instance.get(`/location/${moscowWOEID}/`);
  return response;
};

const getLocationDayRequest = async (
  currentDate: Date,
): Promise<AxiosResponse> => {
  const response = await instance.get(
    `/location/${moscowWOEID}/${format(currentDate, 'yyyy/MM/dd')}`,
  );
  return response;
};

export { getLocationRequest, getLocationDayRequest };
