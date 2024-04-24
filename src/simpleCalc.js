import React, { useReducer, useState } from "react";

export default function Calculator() {
  const actions = {
    inputInfos: ["digits", { data: handleRetrievalOfData() }],
    add: "retrieve-add",
    sub: "subtraction",
    mult: "mult",
    divi: "divi",
  };
  const [inputValue, setInputValue] = useState("");

  function reducer(numbers, actions) {
   let inputInfos = actions.inputInfos[1];
    const numbersOnly = [];
    numbersOnly = inputInfos.filter((element) => typeof element == "numbers");

    switch (actions.type) {
      case actions.add:
        return [{ ...numbers, result: numbersOnly[0] + numbersOnly[1] }];
    }
  }

  function handleaddition() {
    const inputt = document.getElementById("input");
    return (inputt.value += "+");
  }
  function handleRetrievalOfData(inputValue) {
    let inputContents = [];
    return (inputContents = inputValue);
  }

  const [numbers, dispatch] = useReducer(reducer, {
    firstnumber: 0,
    secondnumber: 0,
    result: null,
  });

  return (
    <form className="p-3">
      <div className="m-2 ">
        <input
          placeholder="number"
          id="input"
          onChange={(e) => {
            e.preventDefault();
            setInputValue(e.target.value);
          }}
        />
        <button
          className="btn btn-primary m-1"
          onClick={(e) => {
            e.preventDefault();
            const inputInfos = actions.inputInfos[1];
            dispatch({ inputInfos });
          }}
        >
          result
        </button>
        <button
          className="btn btn-success m-2"
          onClick={(e) => {
            e.preventDefault();

            handleaddition();
          }}
        >
          add
        </button>
        <button className="btn btn-success m-2">subtract</button>
        <button className="btn btn-success m-2">divide</button>
        <button className="btn btn-success m-1">multiply</button>
        <input value={numbers.result} />
      </div>
    </form>
  );
}
