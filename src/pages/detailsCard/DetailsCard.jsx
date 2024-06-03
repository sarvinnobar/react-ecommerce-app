import "./DetailsCard.scss";
import products from "../../db/products.json";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartAction";

export default function DetailsCard() {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const id = parseInt(productId);
  const [product, setProduct] = useState({});

  useEffect(() => {
    const foundProduct = products.find((product) => product.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      console.error(`Product with id ${id} not found`);
    }
  }, [productId]);

  if (!product) {
    return <div>Product not found</div>;
  }

  const { image, title, description, price } = product;
  return (
    <div>
      <div className="det__div">
        <div className="det__imgDiv">
          <div>
            <img src={image} />
          </div>
        </div>
        <div className="det__descDiv">
          <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="det__priceDiv">
              <div>${price}</div>
              <div className="det__btnDiv">
                <button onClick={() => dispatch(addToCart({ product }))}>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
