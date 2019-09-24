import React from 'react';
import { State } from 'xstate';
import { useMachine } from '@xstate/react';
import weatherScreenStateMachine, {
  WeatherScreenStateMachineContext,
  WeatherScreenStateMachineEvent,
} from './weatherScreenStateMachine';

const WeatherScreenContext = React.createContext({} as State<
  WeatherScreenStateMachineContext,
  WeatherScreenStateMachineEvent
>);

const WeatherScreenUpdateContext = React.createContext<Function>(() => {});

const WeatherScreenProvider: React.FC = props => {
  const [currentWeatherScreenState, updateWeatherScreenState] = useMachine(
    weatherScreenStateMachine,
  );

  return (
    <WeatherScreenUpdateContext.Provider
      value={updateWeatherScreenState as Function}>
      <WeatherScreenContext.Provider value={currentWeatherScreenState}>
        {props.children}
      </WeatherScreenContext.Provider>
    </WeatherScreenUpdateContext.Provider>
  );
};

export {
  WeatherScreenProvider,
  WeatherScreenContext,
  WeatherScreenUpdateContext,
};
