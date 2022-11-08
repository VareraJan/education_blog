import { lazy } from 'react';

export const ProfilePageAsync = lazy(
    () => new Promise((resolve) => {
        // @ts-ignore
        // TODO: искуственная задержка, в продакте убрать
        setTimeout(() => resolve(import('./ProfilePage')), 1500);
    }),
);
