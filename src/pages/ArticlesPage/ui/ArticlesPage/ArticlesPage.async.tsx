import { lazy } from 'react';

export const ArticlesPageAsync = lazy(
    () => new Promise((resolve) => {
        // @ts-ignore
        // TODO: искуственная задержка, в продакте убрать
        setTimeout(() => resolve(import('./ArticlesPage')), 400);
    }),
);
