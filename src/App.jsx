// import React from 'react'

import { useReducer } from "react";
import { calculatorReducer } from "./calculatorReducer";

export const App = () => {
  const [state, dispatch] = useReducer(calculatorReducer, "0");
  const data = [
    "CE",
    "C",
    "%",
    "*",
    7,
    8,
    9,
    "-",
    4,
    5,
    6,
    "+",
    1,
    2,
    3,
    ".",
    0,
    "00",
    "000",
    "=",
  ];
  const handleValor = (val) => {
    if (val === "=") {
      dispatch({
        type: "result",
        payload: state,
      });
    }
    if (val !== "=" && val !== "C" && val !== "CE") {
      dispatch({
        type: "add",
        payload: val,
      });
    }
    if (val === "C") {
      dispatch({
        type: "del",
        payload: state,
      });
    }
    if (val === "CE") {
      dispatch({
        type: "clear",
        payload: "",
      });
    }
  };
  return (
    <div className="container vh-100 d-flex flex-row justify-content-center align-items-center">
      <div className="calculator">
        <input disabled={true} name="val" type="text" value={state} />
        <div className="xd">
          {data.map((val) => (
            <button
              className="colorr"
              key={val}
              onClick={() => handleValor(val)}
            >
              {val}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
