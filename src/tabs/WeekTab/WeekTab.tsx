import React, { ReactElement, useContext } from 'react';
import { times, addIndex, map } from 'ramda';
import { WeatherScreenContext } from 'screens/weatherScreen/weatherScreenContext';
import Stub from 'components/Stub';
import WeatherListItemUI from 'components/WeatherListItem/WeatherListItemUI';
import { WeekDataItem } from 'screens/weatherScreen/weatherScreenStateMachine';
import { format, parse } from 'date-fns';
import { ru } from 'date-fns/locale';

import WeekTabUI from './WeekTabUI';

const stubCount = 5;

const getList = (weekListData: WeekDataItem[]): React.ReactElement[] => {
  return addIndex<WeekDataItem, React.ReactElement>(map)((item, index) => {
    const parseDate = parse(item.date as string, 'yyyy-MM-dd', new Date(), {
      weekStartsOn: 0,
    });
    const props = {
      date: format(parseDate, 'EEEE', {
        locale: ru,
      }),
      temperature: (
        <>
          {Math.floor(item.maxTemperature as number)}
          <sup>o</sup>/ {Math.floor(item.minTemperature as number)}
        </>
      ),
      temperatureIcon: `https://www.metaweather.com/static/img/weather/${item.weatherStateAbbr}.svg`,
      weatherStateAbbr:
        item.weatherStateAbbr === null ? '' : item.weatherStateAbbr,
      weekDay: format(parseDate, 'd LLL', {
        locale: ru,
      }),
    };
    return <WeatherListItemUI key={index} {...props}></WeatherListItemUI>;
  }, weekListData);
};

const WeekTab = (): ReactElement => {
  const currentState = useContext(WeatherScreenContext);

  const {
    context: { weekData, isWeekDataLoad },
  } = currentState;

  if (!isWeekDataLoad) {
    const list = times(index => <Stub key={index}></Stub>, stubCount);
    return <WeekTabUI>{list}</WeekTabUI>;
  }

  const list = getList(weekData);
  return <WeekTabUI>{list}</WeekTabUI>;
};

export default WeekTab;
