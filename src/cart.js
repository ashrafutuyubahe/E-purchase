import React, { useState } from "react";

    export default function Cart(){

    const [count, setCount] = useState(0);
    const [productArray, setProductArray] = useState([
      { product: "product 1" }, { product: "product 2" }
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
          <button className="m-5 btn btn-secondary">Cart: {count}</button>
          <button className="btn btn-secondary" onClick={handleReset}>
            Reset
          </button>
          {productArray.map((item) => (
            <div className="d-flex m-4 justify-content-" key={item.product}>
              <input
                type="text"
                className="form-control w-25 bg-info"
                value={item.product}
                readOnly
              />
              <button
                className="m-2 btn btn-success"
                onClick={() => {
                  setCount(count + 1);
                }}
              >
                Add product
              </button>
              <button
                className="btn btn-warning"
                onClick={() => handleRemove(item.product)}
              >
                Remove product
              </button>
            </div>
          ))}
        </>
      );

} 



