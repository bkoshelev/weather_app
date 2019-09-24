import React from 'react';
import styled, { FlattenSimpleInterpolation } from 'styled-components';

const StyledTabNavigatorButton = styled.button<StyledTabNavigatorButton>`
  margin-top: 10px;
  height: 20%;
  width: 40%;
  border-radius: 25px;
  border: unset;
  font-size: 80%;
  line-height: 20%;
  font-family: 'Copenhagen Grotesk Regular', sans-serif;
  ${props => props.styles}
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: 1px solid transparent;
  }
`;

export interface TabNavigatorButtonUIProps {
  children: string;
  tabName: string;
  styles?: FlattenSimpleInterpolation;
}

interface StyledTabNavigatorButton {
  children: string;
  'data-tabname': string;
  styles?: FlattenSimpleInterpolation;
}

const TabNavigatorButtonUI: React.FC<TabNavigatorButtonUIProps> = ({
  children,
  tabName,
  styles,
}) => (
  <StyledTabNavigatorButton styles={styles} data-tabname={tabName}>
    {children}
  </StyledTabNavigatorButton>
);

TabNavigatorButtonUI.defaultProps = {
  children: 'Кнопка',
  tabName: 'today',
};

export default TabNavigatorButtonUI;
