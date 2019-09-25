import React from 'react';
import WeatherScreen from 'screens/weatherScreen/WeatherScreen';
import { normalize } from 'styled-normalize';
import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const fontFace = (
  name = '',
  src = '',
  fontWeight = 'normal',
  fontStyle = 'normal',
) => {
  return `
      @font-face{
          font-family: "${name}";
          src: url(../static/font/${src}.woff) format("woff");
          font-style: ${fontStyle};
          font-weight: ${fontWeight};
      }
  `;
};

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${normalize}
  ${fontFace(
    'Copenhagen Grotesk Regular',
    'CopenhagenGrotesk',
    'normal',
    'normal',
  )}
  ${fontFace(
    'Copenhagen Grotesk light',
    'CopenhagenGrotesk-light',
    'normal',
    'normal',
  )}
  ${fontFace(
    'Copenhagen Grotesk Bold',
    'CopenhagenGrotesk-Bold',
    'normal',
    'normal',
  )}
`;

const App = () => (
  <>
    <GlobalStyle />
    <WeatherScreen></WeatherScreen>
  </>
);

export default App;
