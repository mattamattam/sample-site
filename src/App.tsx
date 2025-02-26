import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Product from "./pages/Product";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/product/:id" element={<Product />} />
    </Routes>
  );
};

export default App;
