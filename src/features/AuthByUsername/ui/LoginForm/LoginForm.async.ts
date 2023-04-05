import { FC, lazy } from 'react';
import { LoginFormProps } from './LoginForm';

// export const LoginFormAsync = lazy<FC<LoginFormProps>>(
//     () => new Promise((resolve) => {
//         // @ts-ignore
//         // TODO: искуственная задержка, в продакте убрать
//         setTimeout(() => resolve(import('./LoginForm')), 1500);
//     }),
// );

export const LoginFormAsync = lazy<FC<LoginFormProps>>(() => import('./LoginForm'));
