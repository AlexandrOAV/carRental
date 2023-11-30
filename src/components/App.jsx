import Catalog from "pages/Catalog";
import Favorites from "pages/Favorites";
import Home from "pages/Home";
import { Navigate, Route, Routes } from "react-router-dom";


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/catalog" element={<Catalog />}/>
      <Route path="/favorites" element={<Favorites />}/>
      <Route path="*" element={<Navigate to='/' />} />
    </Routes>
  );
};
