import React from 'react';
import WeatherListUI from 'components/WeatherList/WeatherListUI';

const WeekTabUI: React.FC = ({ children }) => (
  <WeatherListUI>{children}</WeatherListUI>
);

export default WeekTabUI;
