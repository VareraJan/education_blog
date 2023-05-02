import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleView } from '../../model/consts/consts';
import { Article } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

import cls from './ArticleList.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text, TextSize } from '@/shared/ui/Text';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

const getSkeleton = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => <ArticleListItemSkeleton className={cls.card} view={view} key={index} />);

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        view = ArticleView.SMALL,
        isLoading,
        target,
    } = props;
    const { t } = useTranslation();

    const Stack = view === ArticleView.SMALL ? HStack : VStack;

    const renderArticle = (article: Article) => (
        <ArticleListItem
            article={article}
            view={view}
            className={cls.card}
            key={article.id}
            target={target}
        />
    );

    if (!isLoading && !articles.length) {
        return (
            <Stack max className={classNames('', {}, [className, cls[view]])}>
                <Text size={TextSize.L} title={t('Статьи не найдены')} />
            </Stack>
        );
    }

    return (
        <Stack
            max
            className={classNames('', {}, [className, cls[view]])}
            data-testid="ArticleList"
        >
            {articles.length > 0
                ? articles.map(renderArticle)
                : null}
            {isLoading && getSkeleton(view)}
        </Stack>
    );
});
