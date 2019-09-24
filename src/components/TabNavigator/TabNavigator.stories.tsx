import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import TabNavigatorButtonUI from 'components/TabNavigatorButton/TabNavigatorButtonUI';
import mobileViewPortSetting from '../../storybook';
import TabNavigatorUI from './TabNavigatorUI';

export default {
  title: 'UI-Components/Tab Navigator',
  decorators: [withKnobs],
  component: TabNavigatorUI,
  parameters: {
    componentSubtitle: '',
  },
};

export const Simple = (): React.ReactElement => (
  <TabNavigatorUI
    events={{
      onClick: e => {
        console.log((e.target as HTMLInputElement).dataset.tabname);
      },
    }}>
    <TabNavigatorButtonUI tabName={'button'}>{'Кнопка'}</TabNavigatorButtonUI>
    <TabNavigatorButtonUI tabName={'button'}>{'Кнопка'}</TabNavigatorButtonUI>
  </TabNavigatorUI>
);

Simple.story = mobileViewPortSetting;
