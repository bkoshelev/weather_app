import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import mobileViewPortSetting from '../../storybook';
import TabNavigatorButtonUI from './TabNavigatorButtonUI';

export default {
  title: 'UI-Components/Tab Navigator Button',
  decorators: [withKnobs],
  component: TabNavigatorButtonUI,
  parameters: {
    componentSubtitle: '',
  },
};

export const Simple = (): React.ReactElement => (
  <TabNavigatorButtonUI tabName={'button'}>{'Кнопка'}</TabNavigatorButtonUI>
);

Simple.story = mobileViewPortSetting;
