import React, { useContext } from 'react';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { WeatherScreenContext } from './weatherScreenContext';

const setWeatherStatusColor = (
  isLoad: boolean,
): FlattenSimpleInterpolation | string => {
  return isLoad
    ? css`
        animation: fadeInScreen 1s;
      `
    : ``;
};

const StyledWeatherScreenUI = styled('div')`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template: 20% 80% / 100%;

  @keyframes fadeInScreen {
    0% {
      background-color: white;
    }
    100% {
      ${(props): string => props.theme[props.weatherStatusColor]}
    }
  }
  ${(props: StyledWeatherScreenUIProps): FlattenSimpleInterpolation | string =>
    setWeatherStatusColor(props.isLoad)}
  animation-fill-mode: forwards;
`;

interface StyledWeatherScreenUIProps {
  isLoad: boolean;
  weatherStatusColor: string;
}

type useIsLoadTodayDataFlagHook = () => [boolean, string];

const useIsLoadTodayDataFlag: useIsLoadTodayDataFlagHook = () => {
  const currentState = useContext(WeatherScreenContext);
  const { weatherStateAbbr } = currentState.context.todayData;
  const { isTodayDataLoad } = currentState.context;

  return [isTodayDataLoad, weatherStateAbbr === null ? '' : weatherStateAbbr];
};

export const WeatherScreenUI: React.FC<{ children: React.ReactElement[] }> = ({
  children,
}) => {
  const [isLoad, weatherStateAbbr] = useIsLoadTodayDataFlag();

  return (
    <StyledWeatherScreenUI
      isLoad={isLoad}
      weatherStatusColor={weatherStateAbbr}>
      {children}
    </StyledWeatherScreenUI>
  );
};

export default WeatherScreenUI;
