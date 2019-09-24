import React from 'react';
import styled from 'styled-components';

const StyledTabNavigatorWrapper = styled.div`
  height: 100%;
  width: 100%;
`;
const StyledTabNavigatorUI = styled.div`
  margin-left: 27vw;
  margin-right: 27vw;
  display: flex;
  height: 100%;
  width: 46vw;
  justify-content: space-between;
  align-items: center;
`;

export interface Events {
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const TabNavigatorUI: React.FC<{
  events: Events;
}> = ({ children, events }) => (
  <StyledTabNavigatorWrapper>
    <StyledTabNavigatorUI {...events}>{children}</StyledTabNavigatorUI>
  </StyledTabNavigatorWrapper>
);

export default TabNavigatorUI;
