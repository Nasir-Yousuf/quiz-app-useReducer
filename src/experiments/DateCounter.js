// import { useReducer } from "react";

// const initialState = { count: 0, step: 1 };

// function reducer(state, action) {
//   console.log(action, state);

//   switch (action.type) {
//     case "dec":
//       return { ...state, count: state.count - state.step };
//     case "inc":
//       return { ...state, count: state.count + state.step };
//     case "setCount":
//       return { ...state, count: action.payload };
//     case "setStep":
//       return { ...state, step: action.payload };
//     case "resetCount":
//       return initialState;
//     default:
//       throw new Error(`Unknown action type: ${action.type}`);
//   }
// }

// function DateCounter() {
//   const [count, dispatch] = useReducer(reducer, initialState);

//   const date = new Date("june 21 2027");
//   date.setDate(date.getDate() + count.count);

//   const dec = function () {
//     dispatch({ type: "dec", payload: -1 });
//   };

//   const inc = function () {
//     dispatch({ type: "inc", payload: 1 });
//   };

//   const defineCount = function (e) {
//     dispatch({ type: "setCount", payload: Number(e.target.value) });
//   };

//   const defineStep = function (e) {
//     dispatch({ type: "setStep", payload: Number(e.target.value) });
//   };

//   const reset = function () {
//     dispatch({ type: "resetCount", payload: 0 });
//   };

//   return (
//     <div className="counter">
//       <div>
//         <input
//           type="range"
//           min="0"
//           max="10"
//           value={count.step}
//           onChange={defineStep}
//         />
//         <span>{count.step}</span>
//       </div>

//       <div>
//         <button onClick={dec}>-</button>
//         <input value={count.count} onChange={defineCount} />
//         <button onClick={inc}>+</button>
//       </div>

//       <p>{date.toDateString()}</p>

//       <div>
//         <button onClick={reset}>Reset</button>
//       </div>
//     </div>
//   );
// }
// export default DateCounter;

import { useReducer } from "react";
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increase":
      return { ...state, count: state.count + action.payload };
    case "decrease":
      return { ...state, count: state.count - action.payload };
    default:
      return alert("Something went wrong");
  }
}

function Counter() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <button onClick={() => dispatch({ type: "decrease", payload: 1 })}>
        -
      </button>
      <h1>{count.count}</h1>
      <button onClick={() => dispatch({ type: "increase", payload: 1 })}>
        +
      </button>
    </div>
  );
}

export default Counter;
