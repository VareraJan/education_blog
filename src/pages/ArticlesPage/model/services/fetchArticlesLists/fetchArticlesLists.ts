import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { getArticlesPageLimit } from '../../selectors/articlesPageSelectors';

interface fetchArticlesListsProps {
  page?: number;
}

export const fetchArticlesLists = createAsyncThunk<
  Article[],
  fetchArticlesListsProps,
  ThunkConfig<string>
  >(
      'articlesPage/fetchArticlesLists',
      async (props, thunkApi) => {
          const { extra, rejectWithValue, getState } = thunkApi;
          const { page = 1 } = props;
          const limit = getArticlesPageLimit(getState());
          try {
              const response = await extra.api.get<Article[]>('/articles', {
                  params: {
                      _expand: 'user',
                      _limit: limit,
                      _page: page,
                  },
              });

              if (!response.data) {
                  throw new Error();
              }

              return response.data;
          } catch (error) {
              return rejectWithValue('error');
          }
      },
  );
