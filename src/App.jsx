import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./components/cart";
import Nav from "./components/navbar";
import Fetchdata from "./components/datafetching";
import axios from "axios";
import Calculator from "./components/simpleCalc";
import FetchMovie from "./components/fetchmovie";
import RenderRegister from "./render/register";
import Login from "./render/login";

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
    <Router>
      <>
        <Nav />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={RenderRegister} />
          <Route path="/">
            <Cart
              count={count}
              key={productArray.product}
              setCount={setCount}
              handleReset={handleReset}
              productArray={productArray}
              handleRemove={handleRemove}
              setProductArray={setProductArray}
            />
            <Fetchdata />
            <Calculator />
            <FetchMovie />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
