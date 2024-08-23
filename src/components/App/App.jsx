import css from "./App.module.css";
import { Route, Routes, Navigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Layout from "../Layout/Layout";
import { lazy, Suspense } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/fairbase";
import toast, { Toaster } from "react-hot-toast";

const notify = () => toast("Here is your toast.");

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("../../pages/CatalogPage/CatalogPage"));
const FavoritesPage = lazy(() =>
  import("../../pages/FavoritesPage/FavoritesPage")
);
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage")
);
const Features = lazy(() => import("../Features/Features"));
const Reviews = lazy(() => import("../Reviews/Reviews"));
const ModalPage = lazy(() => import("../../pages/ModalPage/ModalPage"));

const App = () => {
  const [user] = useAuthState(auth);

  return (
    <>
      {user && <NavBar />}
      <Layout>
        <Suspense fallback={<b>Loading page...</b>}>
          <Routes>
            <Route
              path="/"
              element={user ? <Navigate to="/catalog" /> : <HomePage />}
            />
            <Route
              path="/catalog"
              element={user ? <CatalogPage /> : <Navigate to="/" />}
            >
              <Route path="/catalog/:id/" element={<ModalPage />}>
                <Route path="features" element={<Features />} />
                <Route path="reviews" element={<Reviews />} />
              </Route>
            </Route>

            <Route
              path="/favorites"
              element={user ? <FavoritesPage /> : <Navigate to="/" />}
            >
              <Route path="/favorites/:id/" element={<ModalPage />}>
                <Route path="features" element={<Features />} />
                <Route path="reviews" element={<Reviews />} />
              </Route>
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
        <Toaster />
      </Layout>
    </>
  );
};

export default App;
