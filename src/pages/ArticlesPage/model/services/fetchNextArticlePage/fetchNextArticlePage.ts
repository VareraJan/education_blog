import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    getArticlesPageHasMore, getArticlesPageIsLoading, getArticlesPageLimit, getArticlesPageNum,
} from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { fetchArticlesLists } from '../fetchArticlesLists/fetchArticlesLists';

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
              dispatch(fetchArticlesLists({
                  page: page + 1,
              }));
          }
      },
  );
