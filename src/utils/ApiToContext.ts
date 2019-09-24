/* eslint-disable import/no-cycle */
import {
  WeekDataItem,
  TodayData,
} from 'screens/weatherScreen/weatherScreenStateMachine';
/* eslint-enable import/no-cycle */

import { map } from 'ramda';
import {
  GetLocationDayResponseDataItem,
  GetLocationResponseData,
} from '../api';

const lastPeriodIndex = 0;

const normalizeGetLocationDayRequestResponseData = (
  data: GetLocationDayResponseDataItem[],
): TodayData => {
  /* eslint-disable @typescript-eslint/camelcase */
  const { weather_state_abbr, min_temp, max_temp } = data[lastPeriodIndex];
  return {
    weatherStateAbbr: weather_state_abbr,
    minTemperature: min_temp,
    maxTemperature: max_temp,
  };
};
/* eslint-enable @typescript-eslint/camelcase */

const normalizeGetLocationRequestResponseData = (
  data: GetLocationResponseData,
): WeekDataItem[] => {
  /* eslint-disable @typescript-eslint/camelcase */
  return map(item => {
    const { weather_state_abbr, min_temp, max_temp, applicable_date } = item;
    return {
      weatherStateAbbr: weather_state_abbr,
      minTemperature: min_temp,
      maxTemperature: max_temp,
      date: applicable_date,
    };
  }, data.consolidated_weather);
};
/* eslint-enable @typescript-eslint/camelcase */

export {
  normalizeGetLocationDayRequestResponseData,
  normalizeGetLocationRequestResponseData,
};
