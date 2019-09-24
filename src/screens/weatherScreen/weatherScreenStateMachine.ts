import { AxiosResponse } from 'axios';
import { Machine, assign, send } from 'xstate';
import {
  normalizeGetLocationDayRequestResponseData,
  normalizeGetLocationRequestResponseData,
} from '../../utils/ApiToContext';
import {
  getLocationDayRequest,
  getLocationRequest,
  GetLocationDayResponseDataItem,
  GetLocationResponseData,
} from '../../api';

export interface WeatherScreenStateSchema {
  states: {
    todayTab: {};
    getTodayDataRequest: {};
    weekTab: {};
    getWeekDataRequest: {};
  };
}

export interface TodayData {
  weatherStateAbbr: string | null;
  minTemperature: number | null;
  maxTemperature: number | null;
}

export interface WeekDataItem {
  weatherStateAbbr: string | null;
  minTemperature: number | null;
  maxTemperature: number | null;
  date: string | null;
}

export type WeatherScreenStateMachineEvent =
  | { type: 'LOAD_TODAY_DATA' }
  | { type: 'LOAD_WEEK_DATA' }
  | { type: 'CLICK_ON_WEEK_TAB_BUTTON' }
  | { type: 'CLICK_ON_TODAY_TAB_BUTTON' };

export interface WeatherScreenStateMachineContext {
  currentTab: string;
  todayData: TodayData;
  weekData: WeekDataItem[];
  isTodayDataLoad: boolean;
  isWeekDataLoad: boolean;
}

const defaultContext: WeatherScreenStateMachineContext = {
  currentTab: 'today',
  todayData: {
    weatherStateAbbr: null,
    minTemperature: null,
    maxTemperature: null,
  },
  weekData: [
    {
      weatherStateAbbr: null,
      minTemperature: null,
      maxTemperature: null,
      date: null,
    },
  ],
  isTodayDataLoad: false,
  isWeekDataLoad: false,
};

const weatherScreenStateMachine = Machine<
  WeatherScreenStateMachineContext,
  WeatherScreenStateSchema,
  WeatherScreenStateMachineEvent
>(
  {
    id: 'weatherScreen',
    context: defaultContext,
    initial: 'todayTab',
    states: {
      todayTab: {
        entry: [assign({ currentTab: 'today' }), send('LOAD_TODAY_DATA')],
        on: {
          LOAD_TODAY_DATA: {
            target: 'getTodayDataRequest',
            cond: 'isTodayDataNotLoad',
          },
          CLICK_ON_WEEK_TAB_BUTTON: 'weekTab',
        },
      },
      getTodayDataRequest: {
        invoke: {
          id: 'getTodayDataRequest',
          src: (): Promise<AxiosResponse> => getLocationDayRequest(new Date()),
          onDone: {
            target: 'todayTab',
            actions: [
              assign((_, event) => {
                const responseData: GetLocationDayResponseDataItem[] =
                  event.data.data;

                return {
                  todayData: normalizeGetLocationDayRequestResponseData(
                    responseData,
                  ),
                  isTodayDataLoad: true,
                };
              }),
            ],
          },
        },
      },
      weekTab: {
        entry: [assign({ currentTab: 'week' }), send('LOAD_WEEK_DATA')],
        on: {
          LOAD_WEEK_DATA: {
            target: 'getWeekDataRequest',
            cond: 'isWeekDataNotLoad',
          },
          CLICK_ON_TODAY_TAB_BUTTON: 'todayTab',
        },
      },
      getWeekDataRequest: {
        invoke: {
          id: 'getWeekDataRequest',
          src: (): Promise<AxiosResponse> => getLocationRequest(),
          onDone: {
            target: 'weekTab',
            actions: [
              assign((_, event) => {
                const responseData: GetLocationResponseData = event.data.data;
                return {
                  weekData: normalizeGetLocationRequestResponseData(
                    responseData,
                  ),
                  isWeekDataLoad: true,
                };
              }),
            ],
          },
        },
      },
    },
  },
  {
    guards: {
      isTodayDataNotLoad: (
        context: WeatherScreenStateMachineContext,
      ): boolean => context.isTodayDataLoad === false,
      isWeekDataNotLoad: (context: WeatherScreenStateMachineContext): boolean =>
        context.isWeekDataLoad === false,
    },
  },
);

export default weatherScreenStateMachine;
