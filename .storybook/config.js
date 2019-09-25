import React from 'react';
import ReactDOM from 'react-dom';
import { normalize } from 'styled-normalize';
import reset from 'styled-reset'

import { createGlobalStyle } from 'styled-components'
import { configure } from '@storybook/react';

export function fontFace(name, src, fontWeight = 'normal', fontStyle = 'normal') {
  return `
    @font-face{
        font-family: "${name}";
        src: url(${require('../static/font/' + src + '.woff')}) format("woff");
        font-style: ${fontStyle};
        font-weight: ${fontWeight};
    }
`;
}

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${normalize}
  ${fontFace('Copenhagen Grotesk Regular', 'CopenhagenGrotesk', 'normal', 'normal')}
  ${fontFace('Copenhagen Grotesk light', 'CopenhagenGrotesk-light', 'normal', 'normal')}
  ${fontFace('Copenhagen Grotesk Bold', 'CopenhagenGrotesk-Bold', 'normal', 'normal')}
`;

const loaderFn = () => {
  const globalStyleEl =
    document.querySelector('#global-style') ||
    (() => {
      const el = document.createElement('div');
      el.id = 'global-style';
      document.head.append(el);
      return el;
    })();

  ReactDOM.render(<GlobalStyle />, globalStyleEl);


  let exports = [];
  const msxList = require.context('../src', true, /\.stories\.mdx$/);
  const jsList = require.context('../src', true, /\.stories\.js$/);
  const tsxList = require.context('../src', true, /\.stories\.tsx$/);
  //  const tsList = require.context('../src', true, /\.stories\.ts$/);
  msxList.keys().forEach(fname => exports.push(msxList(fname)));
  jsList.keys().forEach(fname => exports.push(jsList(fname)));
  tsxList.keys().forEach(fname => exports.push(tsxList(fname)));
  //tsList.keys().forEach(fname => exports.push(tsList(fname)));

  return exports;
}

configure(loaderFn,
  module
);

