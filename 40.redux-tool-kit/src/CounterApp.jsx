import React, { useRef } from "react";
import ViewCount from "./components/ViewCount";
import { useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counter";

export default function CounterApp() {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    let { value } = inpRef.current;
    dispatch(incrementByAmount(Number(value)));
  };
  const inpRef = useRef(null);

  return (
    <div>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
      <ViewCount />
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      <form onSubmit={handleSubmit}>
        <input type="number" className="bg-red-200" ref={inpRef} />
        <button>submit</button>
      </form>
    </div>
  );
}
