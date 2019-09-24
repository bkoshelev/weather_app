import React, { useContext, ReactElement } from 'react';
import WeekTab from 'tabs/WeekTab/WeekTab';
import TodayTab from 'tabs/TodayTab/TodayTab';
import { WeatherScreenContext } from 'screens/weatherScreen/weatherScreenContext';

const getTab = (tabName = 'week'): ReactElement => {
  const tabs = {
    week: (): ReactElement => <WeekTab></WeekTab>,
    today: (): ReactElement => <TodayTab></TodayTab>,
  };
  return tabs[tabName]();
};

const CurrentTab = (): ReactElement => {
  const currentState = useContext(WeatherScreenContext);
  const currentTabName = currentState.context.currentTab;

  return getTab(currentTabName);
};

export default CurrentTab;
