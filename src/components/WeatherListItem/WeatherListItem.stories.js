import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import mobileViewPortSetting from '../../storybook';
import WeatherListItemUI from './WeatherListItemUI.tsx';

export default {
  title: 'UI-Components/Weather List Item',
  decorators: [withKnobs],
  component: WeatherListItemUI,
  parameters: {
    componentSubtitle: '',
  },
};

export const Simple = () => <WeatherListItemUI></WeatherListItemUI>;

Simple.story = mobileViewPortSetting;
