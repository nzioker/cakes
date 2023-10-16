import React, { useContext } from "react";
import "../Cart.css";
import { CakeContext } from "../Contexts/CakeContext";

const CartItem = (props) => {
  const { id, title, img, description, price, flavor, quantity } = props.data;
  const { cart, addItemToCart, removeItemFromCart, updateCartItemCount } =
    useContext(CakeContext);

  return (
    <div className="cart-container">
      <div className="cart-item" key={id}>
        <img src={img} alt={title} />
        <div className="cart-item-title">
          <p>{title}</p>
        </div>
        <div className="cart-price">
          <p>Price: ${price}</p>
        </div>
        <div className="countHandler">
          <button onClick={() => removeItemFromCart(id)}> - </button>
          <input
            value={cart[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addItemToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
