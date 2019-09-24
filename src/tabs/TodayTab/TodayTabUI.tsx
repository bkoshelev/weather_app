import React from 'react';
import styled from 'styled-components';
import Stub from 'components/Stub';

const StyledTodayTab = styled.section`
  display: grid;
  width: 80%;
  height: 100%;
  justify-items: center;
  align-items: center;
  font-family: 'Copenhagen Grotesk Regular', sans-serif;
  margin-left: 10vw;
  margin-right: 10vw;
  text-align: center;
  @keyframes fadeInTab {
    0% {
      & > * {
        opacity: 0;
      }
    }
    100% {
      & > * {
        opacity: 1;
      }
    }
  }

  animation: fadeInTab 3s;
  animation-fill-mode: forwards;
`;

const StyledCurrentTemperature = styled.div`
  font-family: 'Copenhagen Grotesk Regular', sans-serif;
  font-size: 12vw;
  @keyframes fadeInTemp {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  animation: fadeInTemp 1s;
  animation-fill-mode: forwards;
`;

interface TodayTabUIProps {
  imgUrl: string | null;
  temperature: number | null;
  currentTime: string;
  currentPlace: string;
}

const TodayTabUI = ({
  imgUrl,
  temperature,
  currentTime,
  currentPlace,
}: TodayTabUIProps): React.ReactElement => (
  <StyledTodayTab>
    {imgUrl === null ? (
      <Stub></Stub>
    ) : (
      <img
        style={{
          height: '50vw',
          width: '50vw',
        }}
        alt={'current weather icon'}
        src={imgUrl}></img>
    )}
    {temperature === null ? (
      <Stub></Stub>
    ) : (
      <StyledCurrentTemperature>
        {temperature}
        <sup>o</sup>
      </StyledCurrentTemperature>
    )}
    <div>
      <div style={{}}>{currentTime}</div>
      <div>{currentPlace}</div>
    </div>
  </StyledTodayTab>
);

TodayTabUI.defaultProps = {
  imgUrl: 'https://www.metaweather.com/static/img/weather/hr.svg',
  temperature: 5,
  currentTime: '12:00',
  currentPlace: 'Moscow, Russia',
};

export default TodayTabUI;
