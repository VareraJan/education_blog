import { FC, lazy } from 'react';
import { addCommentFormProps } from './addCommentForm';

export const AddCommentFormAsync = lazy<FC<addCommentFormProps>>(
    () => new Promise((resolve) => {
        // @ts-ignore
        // TODO: искуственная задержка, в продакте убрать
        setTimeout(() => resolve(import('./addCommentForm')), 1500);
    }),
);
