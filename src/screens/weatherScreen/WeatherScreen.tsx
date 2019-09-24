import React from 'react';
import TabNavigator from 'components/TabNavigator';
import CurrentTab from 'components/CurrentTab/CurrentTab';
import { ThemeProvider } from 'styled-components';
import { WeatherScreenProvider } from './weatherScreenContext';
import WeatherScreenUI from './WeatherScreenUI';
import { weatherListTheme } from '../../utils/css';

const WeatherScreen: React.FC = () => {
  return (
    <WeatherScreenProvider>
      <ThemeProvider theme={weatherListTheme}>
        <WeatherScreenUI>
          <nav>
            <TabNavigator></TabNavigator>
          </nav>
          <main>
            <CurrentTab></CurrentTab>
          </main>
        </WeatherScreenUI>
      </ThemeProvider>
    </WeatherScreenProvider>
  );
};

export default WeatherScreen;
