import React from 'react';
import styled from 'styled-components';

const StyledWeatherListUI = styled.ul`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 100vw;
  grid-auto-rows: 11vh;
`;
const WeatherListUI: React.FC = ({ children }) => {
  const list = React.Children.map(children, child => <li>{child}</li>);
  return <StyledWeatherListUI>{list}</StyledWeatherListUI>;
};

export default WeatherListUI;
