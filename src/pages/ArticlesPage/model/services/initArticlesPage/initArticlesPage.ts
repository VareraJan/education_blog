import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    getArticlesPageInited,
} from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { fetchArticlesLists } from '../fetchArticlesLists/fetchArticlesLists';

export const initArticlesPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
  >(
      'articlesPage/initArticlesPage',
      async (_, thunkApi) => {
          const { getState, dispatch } = thunkApi;

          const inited = getArticlesPageInited(getState());

          if (!inited) {
              dispatch(articlesPageActions.initState());
              dispatch(fetchArticlesLists({
                  page: 1,
              }));
          }
      },
  );
