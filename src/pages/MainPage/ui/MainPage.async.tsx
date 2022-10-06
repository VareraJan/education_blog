import { lazy } from 'react';

export const MainPageAsync = lazy(
    () => new Promise((resolve) => {
        // @ts-ignore
        // TODO: искуственная задержка, в продакте убрать
        setTimeout(() => resolve(import('./MainPage')), 1500);
    }),
);
