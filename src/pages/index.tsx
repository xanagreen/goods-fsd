import { lazy } from "react";
import {
  Routes,
  Route,
} from "react-router-dom";

const MainPage = lazy(() => import("./MainPage"));

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
};
