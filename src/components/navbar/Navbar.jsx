import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Center from "../Center/Center";
import { useSelector } from "react-redux";
import { getQty } from "../../utils/cartUtil";

export default function Navbar() {
  const cart = useSelector((state) => state.cart);

  const [isClose, setClose] = useState(false);
  function handleClose() {
    setClose((prev) => !prev);
  }
  let visibility;
  if (isClose === false) {
    visibility = { display: "flex" };
  } else {
    visibility = { display: "none" };
  }

  const cartQty = getQty(cart.cart);

  return (
    <div className="nav__parent">
      <div className="nav__div">
        <Center>
          <nav>
            <Link to="/">
              {" "}
              <h1>Arax</h1>
            </Link>

            <div className="nav__icon" onClick={handleClose}>
              x
            </div>
            <ul style={visibility}>
              <li>
                <Link to="/" className="nav__link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="nav__link">
                  All products
                </Link>
              </li>
              <li>
                <Link to="/checkout" className="nav__link">
                  Cart {cartQty}
                </Link>
              </li>
            </ul>
          </nav>
        </Center>
      </div>
    </div>
  );
}
