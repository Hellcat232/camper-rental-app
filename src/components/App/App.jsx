import css from "./App.module.css";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
// import HomePage from "../../pages/HomePage/HomePage";
// import CatalogPage from "../../pages/CatalogPage/CatalogPage";
// import FavoritesPage from "../../pages/FavoritesPage/FavoritesPage";
// import DetailsPage from "../../pages/DetailsPage/DetailsPage";
// import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
// import ModalDetails from "../Modal/ModalDetails";
// import Features from "../Features/Features";
// import Reviews from "../Reviews/Reviews";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("../../pages/CatalogPage/CatalogPage"));
const FavoritesPage = lazy(() =>
  import("../../pages/FavoritesPage/FavoritesPage")
);
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage")
);
// const ModalDetails = lazy(() => import("../Modal/Modal"));
// const ModalDetails = lazy(() => import("../ModalXXX/ModalX"));
const Features = lazy(() => import("../Features/Features"));
const Reviews = lazy(() => import("../Reviews/Reviews"));
const ModalPage = lazy(() => import("../../pages/ModalPage/ModalPage"));

const App = () => {
  return (
    <Suspense fallback={<b>Loading page...</b>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />}>
          <Route path="/catalog/:id/" element={<ModalPage />}>
            <Route path="features" element={<Features />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>

        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default App;
