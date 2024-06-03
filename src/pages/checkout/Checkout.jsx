import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./Checkout.scss";
import { decrement, increment } from "../../redux/cartAction";
import Form from "../../components/form/Form";
export default function Checkout() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="cart-wrapper">
        <div class="cart-div">
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {cart.cart.map((item) => (
                <tr key={item.id}>
                  <td className="order-info">
                    <Link to={`/products/${item.id}`}>
                      <div className="order-img">
                        <img src={item.image} />
                      </div>
                    </Link>
                    {item.title}
                  </td>
                  <td>
                    <button
                      onClick={() => dispatch(decrement(item.id))}
                      className="cart-btn"
                    >
                      -
                    </button>
                    <span className="qnty">{item.count}</span>
                    <button
                      onClick={() => dispatch(increment(item.id))}
                      className="cart-btn"
                    >
                      +
                    </button>
                  </td>
                  <td>${item.price}</td>
                </tr>
              ))}
              <tr>
                <td>Total</td>
                <td></td>
                <td>${cart.total}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Form />
      </div>
    </div>
  );
}
