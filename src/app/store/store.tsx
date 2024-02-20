import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from '../../features/FilterProducts/slice';
import productsReducer from '../../widgets/ProductList/slice';
import productReducer from '../../pages/ProductPage/slice';

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
    product: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;