import React from 'react';
import styled, { ThemeProps } from 'styled-components';
import { WeatherListTheme } from '../../utils/css';

interface ItemWrapperProps {
  theme: ThemeProps<WeatherListTheme>;
  weatherStatusColor: string;
}

const StyledWeatherListItem = styled.div`
  min-height: 100%;
  min-width: 100%;
  height: 100%;
  width: 100%;

  display: flex;
  font-family: 'Copenhagen Grotesk Regular', sans-serif;
  font-weight: normal;
  font-size: 17px;
  justify-content: flex-end;
  align-items: center;
`;

const ItemWrapper = styled.div`
  min-height: 100%;
  min-width: 100%;
  height: 100%;
  width: 100%;
  ${(props: ItemWrapperProps) => props.theme[props.weatherStatusColor]}
`;

const Temperature = styled.div`
  display: inline-block;
  margin-left: 10px;
  margin-right: 10px;
  justify-self: center;
  flex-basis: 20%;
`;

const WeekDay = styled.div`
  display: inline-block;
  font-size: 12px;
`;
const Date = styled.time`
  display: inline-block;
  flex-basis: 60%;
  padding-left: 30px;
`;

interface WeatherListItemUIProps {
  weekDay: string;
  date: string;
  temperature: JSX.Element;
  temperatureIcon: string;
  weatherStateAbbr: string;
}

const WeatherListItemUI = ({
  weekDay,
  date,
  temperature,
  temperatureIcon,
  weatherStateAbbr,
}: WeatherListItemUIProps) => {
  return (
    <ItemWrapper {...{ weatherStatusColor: weatherStateAbbr }}>
      <StyledWeatherListItem>
        <Date>
          <div>{date}</div>
          <WeekDay>{weekDay}</WeekDay>
        </Date>
        <Temperature>{temperature}</Temperature>
        <img
          style={{
            height: '10vw',
            width: '10vw',
            flexBasis: '20%',
          }}
          alt={'current weather icon'}
          src={temperatureIcon}></img>
      </StyledWeatherListItem>
    </ItemWrapper>
  );
};

WeatherListItemUI.defaultProps = {
  date: 'Monday',
  temperature: '10',
  temperatureIcon: 'X',
  color: '#FFF8DE',
  weekDay: '24 Oct',
};

export default WeatherListItemUI;
