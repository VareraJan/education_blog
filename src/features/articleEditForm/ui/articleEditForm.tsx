import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import cls from './articleEditForm.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';

interface articleEditFormProps {
    className?: string;
}

// TODO Форма создания статьи
export const ArticleEditForm = memo((props: articleEditFormProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <div className={classNames(cls.articleEditForm, {}, [className])}>
            articleEditForm
        </div>
    );
});
