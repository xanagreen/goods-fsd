import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer, { categoriesApi } from '../../features/FilterProducts/slice';
import productsReducer from '../../widgets/ProductList/slice';
import { productApi } from '../../pages/ProductPage/api';
import searchReducer from '../../features/SearchProducts/slice';
import { selectionProductsApi } from 'widgets/Selection/api';

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
    search: searchReducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [selectionProductsApi.reducerPath]: selectionProductsApi.reducer,
  },
  middleware: (gDM) =>
    gDM().concat([
      categoriesApi.middleware,
      productApi.middleware,
      selectionProductsApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;