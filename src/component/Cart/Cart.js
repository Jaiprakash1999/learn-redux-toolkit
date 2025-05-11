// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import Tooltip from "../../common-component/tooltip/Tooltip";
// import Select from "../../common-component/select/Select";
// import Modal from "../../common-component/Modal/Modal";

// const Cart = () => {
//   const [showModal, setShowModal] = useState();

//   const cart = useSelector((state) => state.cart);
//   console.log(cart, "state");
//   const totalAmount = cart.reduce((a, b) => a + b.productPrice, 0);

//   return (
//     <div>
//       <div
//         style={{ display: "flex", margin: 20, justifyContent: "space-between" }}
//       >
//         <div> Cart</div>
//         <div>
//           <Select />
//         </div>
//       </div>
//       <div>
//         <button onClick={() => setShowModal(true)}>Show Modal</button>
//       </div>
//       <div>Total Items : {cart.length}</div>
//       <div>Total price: {totalAmount}</div>
//       <div style={{ marginTop: "30px" }}>
//         <button>
//           <Tooltip text={`Total price : ${totalAmount}`}>
//             show amount in tooltip
//           </Tooltip>
//         </button>
//       </div>

//       <Modal showModal={showModal} onClose={() => setShowModal(false)}>
//         <div>Hi JP</div>
//       </Modal>
//     </div>
//   );
// };

// export default Cart;

import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import "react-phone-number-input/style.css";
import Tooltip from "../../common-component/tooltip/Tooltip";
import Select from "../../common-component/select/Select";
import Modal from "../../common-component/Modal/Modal";
import MultiSelect from "../../common-component/select/MultiSelect";
// import PhoneInput from "react-phone-number-input";
import { useNavigate } from "react-router-dom";

const OPTIONS = [
  { id: 1, label: "Male", value: "M" },
  { id: 2, label: "Female", value: "F" },
  { id: 3, label: "Others", value: "O" },
];

const Cart = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);
  const totalAmount = useMemo(
    () => cart.reduce((a, b) => a + b.productPrice, 0),
    [cart]
  );

  // Memoize the JSX elements that don't depend on showModal
  const cartSummary = useMemo(() => {
    console.log(cart, "state");
    return (
      <div>
        <div
          style={{
            display: "flex",
            margin: 20,
            justifyContent: "space-between",
          }}
        >
          <div>
            <div>Cart</div>
            <div style={{ margin: "10px 0px" }}>
              <button
                style={{
                  border: "1px solid blue",
                  padding: "4px",
                  borderRadius: "4px",
                  background: "#fff",
                  color: "blue",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/prescription")}
              >
                Generate Prescription
              </button>
            </div>
          </div>
          <div>
            <Select />
          </div>
        </div>
        {/* <PhoneInput
          placeholder="Enter phone number"
          country="" // Default country code
          onChange={(value) => console.log(value)} // Handle phone number change
          // onBlur={() => console.log('Blur')} // Handle onBlur event
          // onFocus={() => console.log('Focus')} // Handle onFocus event
        /> */}

        <div>
          <button onClick={() => setShowModal(true)}>Show Modal</button>
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
  }, [totalAmount, cart]);

  return (
    <div>
      {cartSummary}
      <Modal showModal={showModal} onClose={() => setShowModal(false)}>
        <div>Hi JP</div>
      </Modal>
    </div>
  );
};

export default Cart;
