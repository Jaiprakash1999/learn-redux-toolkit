import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const state = useSelector((state) => state);
  const { cart = [] } = state || {};
  console.log(state, "state");
  const totalAmount = cart.reduce((a, b) => a + b.productPrice, 0);
  return (
    <div>
      Cart
      <div>Total Items : {cart.length}</div>
      <div>Total price: {totalAmount}</div>
    </div>
  );
};

export default Cart;
