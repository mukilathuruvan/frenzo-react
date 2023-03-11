import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "orderIce": {
      if (action.payload < 5) {
        return {
          ...state,
          iceCount: state.iceCount - action.payload,
          amount: 0,
        };
      } else if (action.payload >= 5) {
        let cake = parseInt(action.payload / 5);
        return {
          cakeCount: state.cakeCount - cake,
          iceCount: state.iceCount - action.payload,
          amount: 0,
        };
      }
      break;
    }

    case "orderCake": {
      return { ...state, cakeCount: state.cakeCount - action.payload };
    }
    case "changeAmount": {
      return { ...state, amount: action.payload };
    }
    default:
      return state;
  }
};

const Reducer = () => {
  const [stock, dispatch] = useReducer(reducer, {
    cakeCount: 10,
    iceCount: 50,
    amount: 0,
  });
  return (
    <div>
      <input
        type="number"
        onChange={(e) =>
          dispatch({ type: "changeAmount", payload: Number(e.target.value) })
        }
      />
      <h1>
        cakeCount - {stock.cakeCount} - iceCount - {stock.iceCount}
      </h1>

      <button
        onClick={() => dispatch({ type: "orderIce", payload: stock.amount })}>
        OrderIce
      </button>
    </div>
  );
};

export default Reducer;
