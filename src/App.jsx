import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Home from "./pages/home/Home";
import AllProducts from "./pages/allProducts/AllProducts";
import DetailsCard from "./pages/detailsCard/DetailsCard";
import Checkout from "./pages/checkout/Checkout";
import Layout from "./layout/Layout";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:productId" element={<DetailsCard />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
