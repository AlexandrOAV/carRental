// import Catalog from "pages/Catalog";
// import Favorites from "pages/Favorites";
// import Home from "pages/Home";
import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Loader } from "./Loader/Loader";


const Home = lazy(() => import("pages/Home"));
const Catalog = lazy(() => import("pages/Catalog"));
const Favorites = lazy(() => import("pages/Favorites"));

export const App = () => {
  return (
    <Suspense fallback={<Loader/>}>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/catalog" element={<Catalog />}/>
      <Route path="/favorites" element={<Favorites />}/>
      <Route path="*" element={<Navigate to='/' />} />
    </Routes>
    </Suspense>
  );
};
