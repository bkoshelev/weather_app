import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import mobileViewPortSetting from '../../storybook';
import WeekTab from './WeekTab';

export default {
  title: 'Tabs/Week Tab',
  decorators: [withKnobs],
  component: WeekTab,
  parameters: {
    componentSubtitle: '',
  },
};

export const Simple = () => <WeekTab></WeekTab>;

Simple.story = mobileViewPortSetting;
