import ProductCard from "./ProductCard";
import products from "../../db/products.json";
import "./ProductIndex.scss";

export default function ProductIndex() {
  return (
    <div className="products__div">
      <h1>New & Trending</h1>

      <div className="pContainer">
        {products.length > 0 &&
          products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </div>
    </div>
  );
}
