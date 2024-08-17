import css from "./App.module.css";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
// import HomePage from "../../pages/HomePage/HomePage";
// import CatalogPage from "../../pages/CatalogPage/CatalogPage";
// import FavoritesPage from "../../pages/FavoritesPage/FavoritesPage";
// import DetailsPage from "../../pages/DetailsPage/DetailsPage";
// import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
// import ModalDetails from "../Modal/ModalDetails";
import Features from "../Features/Features";
import Reviews from "../Reviews/Reviews";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("../../pages/CatalogPage/CatalogPage"));
const FavoritesPage = lazy(() =>
  import("../../pages/FavoritesPage/FavoritesPage")
);
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage")
);
const ModalDetails = lazy(() => import("../Modal/ModalDetails"));

const App = () => {
  return (
    <Layout>
      <Suspense fallback={<b>Loading page...</b>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />}>
            <Route path=":id" element={<ModalDetails />}>
              <Route path="features" element={<Features />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>

          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;
