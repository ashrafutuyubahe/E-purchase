import React from "react";

export default function Cart(props) {


  return (
    <>
      <button className="m-5 btn btn-secondary">
            Cart: {props.count}
      </button>
      <button className="btn btn-secondary" onClick={props.handleReset}>
        Reset
      </button>
      {props.productArray.map((item,index) => (
        <div className="d-flex m-4 justify-content-" key={index}>
          <input
            type="text"
            className="form-control w-25 bg-info"
            value={item.product}
            readOnly
          />  
          <button
            className="m-2 btn btn-success"
            onClick={() => {
           props.setCount(props.count + 1);
            }}
          >
            Add product
          </button>
          <button className="btn btn-warning"  onClick={()=>{props.handleRemove(item.product)}}>
            Remove product
          </button>
        </div>   
        
    
      ))}  
    </>
  );           
}
