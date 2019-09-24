import React, { useContext } from 'react';
import {
  WeatherScreenUpdateContext,
  WeatherScreenContext,
} from 'screens/weatherScreen/weatherScreenContext';
import TabNavigatorButton from 'components/TabNavigatorButton/TabNavigatorButton';
import TabNavigatorUI from './TabNavigatorUI';

const TabNavigator: React.FC = () => {
  const changeTab = useContext(WeatherScreenUpdateContext);
  const currentState = useContext(WeatherScreenContext);

  const events = {
    onClick: (e: React.SyntheticEvent<HTMLDivElement>): void => {
      const { tabname: tabName } = (e.target as HTMLInputElement).dataset;

      const tabNameToEvent = {
        today: 'CLICK_ON_TODAY_TAB_BUTTON',
        week: 'CLICK_ON_WEEK_TAB_BUTTON',
      };

      if (tabName !== undefined) {
        changeTab(tabNameToEvent[tabName]);
      }
    },
  };

  const props = {
    events,
  };

  return (
    <TabNavigatorUI {...props}>
      <TabNavigatorButton
        selected={
          currentState.matches('todayTab') ||
          currentState.matches('getTodayDataRequest')
        }
        tabName={'today'}>
        Today
      </TabNavigatorButton>
      <TabNavigatorButton
        selected={
          currentState.matches('weekTab') ||
          currentState.matches('getWeekDataRequest')
        }
        tabName={'week'}>
        Week
      </TabNavigatorButton>
    </TabNavigatorUI>
  );
};

export default TabNavigator;
