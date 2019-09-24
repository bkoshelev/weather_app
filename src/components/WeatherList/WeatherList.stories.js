import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import mobileViewPortSetting from '../../storybook';
import WeatherListUI from './WeatherListUI.tsx';
import WeatherListItemUI from './../WeatherListItem/WeatherListItemUI';

export default {
  title: 'UI-Components/Weather List',
  decorators: [withKnobs],
  component: WeatherListUI,
  parameters: {
    componentSubtitle: '',
  },
};

export const Simple = () => (
  <WeatherListUI>
    <WeatherListItemUI></WeatherListItemUI>
    <WeatherListItemUI></WeatherListItemUI>
    <WeatherListItemUI></WeatherListItemUI>
  </WeatherListUI>
);

Simple.story = mobileViewPortSetting;
