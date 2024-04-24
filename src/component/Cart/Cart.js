import React from "react";
import { useSelector } from "react-redux";
import Tooltip from "../../common-component/tooltip/Tooltip";

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
      <div style={{ marginTop: "30px" }}>
        <button>
          <Tooltip text={`Total price : ${totalAmount}`}>
            show amount in tooltip
          </Tooltip>
        </button>
      </div>
    </div>
  );
};

export default Cart;
