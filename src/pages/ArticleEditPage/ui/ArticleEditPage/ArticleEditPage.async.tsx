import { lazy } from 'react';

export const ArticleEditPageAsync = lazy(
    () => new Promise((resolve) => {
        // @ts-ignore
        // TODO: искуственная задержка, в продакте убрать
        setTimeout(() => resolve(import('./ArticleEditPage')), 1500);
    }),
);
