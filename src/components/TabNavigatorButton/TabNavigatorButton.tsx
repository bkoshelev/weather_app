import React from 'react';
import { css } from 'styled-components';
import TabNavigatorButtonUI from './TabNavigatorButtonUI';

export interface TabNavigatorButtonProps {
  children: string;
  tabName: string;
  selected: boolean;
}

const selectStyle = css`
  background-color: #95a0a4;
  color: #f4f4f4;
`;

const unselectedButtonStyle = css`
  color: black;
  background-color: transparent;
`;

export const TabNavigatorButton: React.FC<TabNavigatorButtonProps> = props => {
  const { selected, ...otherProps } = props;
  return (
    <TabNavigatorButtonUI
      styles={selected ? selectStyle : unselectedButtonStyle}
      {...otherProps}></TabNavigatorButtonUI>
  );
};

export default TabNavigatorButton;
