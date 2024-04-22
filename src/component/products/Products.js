import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux-store/slice/cartSlice";

const PRODUCTS_LIST = [
  {
    id: "1",
    price: 10,
    productName: "Mobile",
  },
  {
    id: "2",
    price: 20,
    productName: "Laptop",
  },
  {
    id: "3",
    price: 30,
    productName: "Earphone",
  },
  { id: "4", price: 40, productName: "Iwatch" },
];

const Products = () => {
  const dispatch = useDispatch();

  return (
    <div style={{ margin: "40px" }}>
      {PRODUCTS_LIST.map((product) => {
        return (
          <div style={{ margin: 20 }} key={product.id}>
            {product.productName} : {product.price}{" "}
            <button
              onClick={() =>
                dispatch(
                  addItem({
                    ProductName: product.productName,
                    productPrice: product.price,
                  })
                )
              }
            >
              Add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
