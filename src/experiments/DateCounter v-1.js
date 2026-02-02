import { useReducer, useState } from "react";

function reducer(state, action) {
  console.log(action, state);

  // if (action.type === "inc") return state + 1;
  // if (action.type === "dec") return state - 1;
  // if (action.type === "setCount") return action.payload;

  switch (action.type) {
    case "dec":
      return { ...state, count: state.count - state.step };
    case "inc":
      return { ...state, count: state.count + state.step };
    case "setCount":
      return { ...state, count: action.payload };
    case "setStep":
      return { ...state, step: action.payload };
    case "resetCount":
      return { ...state, step: 1, count: 0 };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

function DateCounter() {
  // const [step, setStep] = useState(1);

  // const [step, dispatch] = useReducer;

  //  const [count, setCount] = useState(0);
  const initialSTate = { count: 0, step: 1 };

  const [count, dispatch] = useReducer(reducer, initialSTate);

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count.count);

  const dec = function () {
    // setCount((count) => count - 1);
    // setCount((count) => count - step);
    dispatch({ type: "dec", payload: -1 });
  };

  const inc = function () {
    // setCount((count) => count + 1);
    // setCount((count) => count + step);
    dispatch({ type: "inc", payload: 1 });
  };

  const defineCount = function (e) {
    // setCount(Number(e.target.value));
    // dispatch({ type: "setCount", payload: Number(e.target.value) });
    dispatch({ type: "setCount", payload: Number(e.target.value) });
    // dispatch({type : })
  };

  const defineStep = function (e) {
    // setStep(Number(e.target.value));
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  };

  const reset = function () {
    // setCount(0);
    // setStep(1);
    dispatch({ type: "resetCount", payload: 0 });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={count.step}
          onChange={defineStep}
        />
        <span>{count.step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count.count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
