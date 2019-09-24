import React, { useContext } from 'react';
import { format } from 'date-fns';
import { WeatherScreenContext } from 'screens/weatherScreen/weatherScreenContext';
import TodayTabUI from './TodayTabUI';

const TodayTab = (): React.ReactElement => {
  const currentState = useContext(WeatherScreenContext);

  const {
    context: { todayData, isTodayDataLoad },
  } = currentState;

  if (!isTodayDataLoad) {
    const props = {
      currentPlace: 'Moscow, Russia',
      currentTime: format(new Date(), 'HH:mm'),
      imgUrl: null,
      temperature: null,
    };

    return <TodayTabUI {...props}></TodayTabUI>;
  }

  const { weatherStateAbbr, minTemperature } = todayData;

  console.log({ todayData });

  const props = {
    currentPlace: 'Moscow, Russia',
    currentTime: format(new Date(), 'HH:mm'),
    imgUrl: `https://www.metaweather.com/static/img/weather/${weatherStateAbbr}.svg`,
    temperature: minTemperature === null ? -100 : Math.floor(minTemperature),
  };

  return <TodayTabUI {...props}></TodayTabUI>;
};

export default TodayTab;
