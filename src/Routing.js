import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import PrescriptionGenerator from "./component/html-to-pdf/FormToPdf";

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/prescription" element={<PrescriptionGenerator />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
