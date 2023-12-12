import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "../redux/counterSlice";

export function Counter() {
  const count = useSelector((state) => state.counter.value); //güncellenen global veriyi ekranda göstermek için
  const dispatch = useDispatch(); //global veriyi değiştiren/güncelleyen fonkyonları kullanmak için

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <div>
        <button
          aria-label="incrementByAmount value"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          incrementByAmount
        </button>
      </div>
    </div>
  );
}
