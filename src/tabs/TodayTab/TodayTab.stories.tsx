import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import TodayTabUI from './TodayTabUI';
import mobileViewPortSetting from '../../storybook';

export default {
  title: 'Tabs/Today Tab',
  decorators: [withKnobs],
  component: TodayTabUI,
  parameters: {
    componentSubtitle: '',
  },
};

export const Simple = () => <TodayTabUI></TodayTabUI>;

Simple.story = mobileViewPortSetting;
