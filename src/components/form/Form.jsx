import React from "react";
import "./Form.scss";

export default function Form() {
  var name, email, city, postCode, streetAddress, phoneNumber;

  return (
    <div className="cartDiv checkoutDiv">
      <h2>Shipping Info</h2>
      <div className="checkoutCenter">
        <input type="text" placeholder="Name" value={name} name="name" />
        <input
          type="text"
          placeholder="Phone number"
          value={phoneNumber}
          name="phoneNUmber"
        />
        <input type="text" placeholder="Email" value={email} name="email" />
        <div className="cartFlex">
          <input type="text" placeholder="City" value={city} name="city" />
          <input
            type="text"
            placeholder="Street Address"
            value={streetAddress}
            name="streetAddress"
          />
        </div>
        <input
          type="text"
          placeholder="Post Code"
          value={postCode}
          name="postalCode"
        />
        <div className="checkoutBtnDiv">
          <button className="checkoutBtn">Continue payment</button>
        </div>
      </div>
    </div>
  );
}
