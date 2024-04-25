import React from "react";
import { useSelector } from "react-redux";
import Tooltip from "../../common-component/tooltip/Tooltip";
import Select from "../../common-component/select/Select";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart, "state");
  const totalAmount = cart.reduce((a, b) => a + b.productPrice, 0);

  return (
    <div>
      <div
        style={{ display: "flex", margin: 20, justifyContent: "space-between" }}
      >
        <div> Cart</div>
        <div>
          <Select />
        </div>
      </div>
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
