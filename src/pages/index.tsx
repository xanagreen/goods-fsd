import { Provider } from 'react-redux';
import { store } from 'app/store/store';
import { lazy } from "react";
import {
  Routes,
  Route,
} from "react-router-dom";

const MainPage = lazy(() => import("./MainPage"));
const CatalogPage = lazy(() => import("./CatalogPage"));
const ProductPage = lazy(() => import("./ProductPage"));
const NotFoundPage = lazy(() => import("./NotFoundPage"));


export const Routing = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="catalog/:productId" element={<ProductPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Provider>
  );
};
