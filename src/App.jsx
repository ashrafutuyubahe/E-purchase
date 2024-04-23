import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./cart";
import Nav from "./navbar";
import Fetchdata from "./datafetching";
import axios from "axios";
import Calculator from "./simpleCalc";

axios.defaults.baseURL = "http://127.0.0.1:6000";
axios.defaults.withCredentials = true;

function App() {
  const [count, setCount] = useState(0);
  const [productArray, setProductArray] = useState([
    { product: "product 1" },
    { product: "product 2" },
  ]);

  function handleReset() {
    setCount(0);
  }

  const handleRemove = (productToRemove) => {
    const updatedProductArray = productArray.filter(
      (item) => item.product !== productToRemove
    );
    setProductArray(updatedProductArray);
  };

  return (
    <>
      {/* <Nav />

      <Cart
        count={count}
        key={productArray.product}
        setCount={setCount}
        handleReset={handleReset}
        productArray={productArray}
        handleRemove={handleRemove}
        setProductArray={setProductArray}
      />

      <Fetchdata /> */}
      <Calculator/>
    </>
  );
}

export default App;
