import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux-store/slice/cartSlice";
import Pagination from "../../common-component/pagination/Pagination";

import CustomDatePicker from "../../common-component/CustomDatePicker/CustomDatePicker";
import PrescriptionGenerator from "../html-to-pdf/FormToPdf";

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
  {
    id: "5",
    price: 300,
    productName: "Shoes",
  },
  {
    id: "6",
    price: 490,
    productName: "Book",
  },
  {
    id: "7",
    price: 530,
    productName: "Induction",
  },
  {
    id: "8",
    price: 980,
    productName: "Freez",
  },
  {
    id: "9",
    price: 380,
    productName: "Cooler",
  },
  {
    id: "10",
    price: 111,
    productName: "Iphone",
  },
  {
    id: "11",
    price: 201,
    productName: "Chair",
  },
  {
    id: "12",
    price: 199,
    productName: "Washing machine",
  },
];

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();
  const countPerPage = 5;

  const startIndex = (currentPage - 1) * countPerPage;
  const endIndex = currentPage * countPerPage;

  const currentList = PRODUCTS_LIST.slice(startIndex, endIndex);

  return (
    <div style={{ margin: "40px" }}>
      {(currentList || []).map((product) => {
        return (
          <div
            style={{
              margin: 20,
              display: "flex",
              justifyContent: "space-between",
              background: "pink",
              padding: 5,
              width: "100%",
            }}
            key={product.id}
          >
            <div
              style={{
                width: "20%",
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              {product.productName}
            </div>{" "}
            <div style={{ width: "20%" }}>Rs {product.price}</div>
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

      {/* <FormToPDF /> */}
      <PrescriptionGenerator />
      {/* <HtmlToPdf /> */}
      {/* <FormToPDF /> */}

      <CustomDatePicker />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalRecords={PRODUCTS_LIST.length}
        countPerPage={countPerPage}
      />
    </div>
  );
};

export default Products;
