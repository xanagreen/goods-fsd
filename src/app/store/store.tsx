import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from '../../features/FilterProducts/slice';
import productsReducer from '../../widgets/ProductList/slice';
import productReducer from '../../pages/ProductPage/slice';
import searchReducer from '../../features/SearchProducts/slice';

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
    product: productReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;