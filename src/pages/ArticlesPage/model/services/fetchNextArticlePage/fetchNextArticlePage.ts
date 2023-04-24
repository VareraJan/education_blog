import { createAsyncThunk } from '@reduxjs/toolkit';

import {
    getArticlesPageHasMore, getArticlesPageIsLoading, getArticlesPageNum,
} from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesLists/fetchArticlesLists';

import { ThunkConfig } from '@/app/providers/StoreProvider';

export const fetchNextArticlePage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
  >(
      'articlesPage/fetchNextArticlePage',
      async (_, thunkApi) => {
          const { getState, dispatch } = thunkApi;
          const hasMore = getArticlesPageHasMore(getState());
          const page = getArticlesPageNum(getState());
          const isLoading = getArticlesPageIsLoading(getState());

          if (hasMore && !isLoading) {
              dispatch(articlesPageActions.setPage(page + 1));
              dispatch(fetchArticlesList({}));
          }
      },
  );
