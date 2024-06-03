import "./ProductCard.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartAction";

export default function ProductCard({ product }) {
  const shorterDesc =
    product.description.split(".").slice(0, 1).join(".") + ".";
  const dispatch = useDispatch();
  return (
    <div className="pCard">
      <Link to={`/products/${product.id}`} className="pCard__link">
        <div className="pCard__div">
          <img src={product.image} />
        </div>
      </Link>
      <div className="desc__div">
        {product.title}

        <div className="desc__rating">{product.rating}</div>
        <div className="desc__title">{shorterDesc}</div>
        <div className="price__div">
          <div className="price">${product.price}</div>

          <div className="pCard__btn">
            <button onClick={() => dispatch(addToCart({ product }))}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
