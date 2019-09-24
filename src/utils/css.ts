export interface WeatherListTheme {
  [key: string]: string;
}

const weatherListTheme: WeatherListTheme = {
  sn: `
    background-color: #eef6f9;
  `,
  sl: `
    background-color: #eef6f9;
    filter: brightness(90%);
  `,
  h: `
    background-color: #eef6f9;
    filter: brightness(80%);
  `,
  t: `
    background-color: #e8e8e8;
    filter: brightness(10%);
  `,
  hr: `
    background-color: #e8e8e8;
  `,
  lr: `
    background-color: #e8e8e8;
    filter: brightness(110%);
  `,
  s: `
    background-color: #e8e8e8;
  `,
  hc: `
    background-color: #f7fcff;
    filter: brightness(90%);
  `,
  lc: `
    background-color: #f7fcff;
  `,
  c: `
    background-color: #fff8de;
  `,
};

export { weatherListTheme };
