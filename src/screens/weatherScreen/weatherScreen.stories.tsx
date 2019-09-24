import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import WeatherScreen from './WeatherScreen';
import mobileViewPortSetting from '../../storybook';

export default {
  title: 'Screens/Weather Screen',
  decorators: [withKnobs],
  component: WeatherScreen,
  parameters: {
    componentSubtitle: '',
  },
};

export const Simple = () => <WeatherScreen></WeatherScreen>;

Simple.story = mobileViewPortSetting;
