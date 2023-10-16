import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cakes } from "../data";
import { CakeContext } from "../Contexts/CakeContext";
import CartItem from "./CartItem";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, totalCartAmount } = useContext(CakeContext);
  const total = totalCartAmount();
  let navigate = useNavigate();
  return (
    <>
      <Navbar />

      <div>
        <h1 className="cart-title">Cart </h1>
        {cakes.map((cake) => {
          if (cart[cake.id] !== 0) {
            return <CartItem data={cake} />;
          }
        })}
      </div>
      {total > 0 ? (
        <div className="checkout">
          <p>Subtotal: $ {total}</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button>Checkout</button>
        </div>
      ) : (
        <h1 className="empty-cart">Your Cart is empty</h1>
      )}
    </>
  );
};

export default Cart;
