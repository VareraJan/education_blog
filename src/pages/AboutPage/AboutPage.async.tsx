import { lazy } from 'react';

export const AboutPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      // TODO: искуственная задержка, в продакте убрать
      setTimeout(() => resolve(import('./AboutPage')), 1500);
    }),
);
