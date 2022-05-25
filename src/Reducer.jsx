import { useReducer } from "react";

import { PlusIcon, MinusIcon } from "@heroicons/react/solid";

// fancy logic to make sure the number is between 0 and 255
const limitRGB = (num) => (num < 0 ? 0 : num > 255 ? 255 : num);

const step = 50;

const INCREMENT_R = "INCREMENT_R";
const DECREMENT_R = "DECREMENT_R";
const INCREMENT_G = "INCREMENT_G";
const DECREMENT_G = "DECREMENT_G";
const INCREMENT_B = "INCREMENT_B";
const DECREMENT_B = "DECREMENT_B";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_R:
      return Object.assign({}, state, { r: limitRGB(state.r + step) });
    case DECREMENT_R:
      return Object.assign({}, state, { r: limitRGB(state.r - step) });
    case INCREMENT_G:
      return Object.assign({}, state, { g: limitRGB(state.g + step) });
    case DECREMENT_G:
      return Object.assign({}, state, { g: limitRGB(state.g - step) });
    case INCREMENT_B:
      return Object.assign({}, state, { b: limitRGB(state.b + step) });
    case DECREMENT_B:
      return Object.assign({}, state, { b: limitRGB(state.b - step) });
    default:
      return state;
  }
};

const Controls = ({ color, increment, decrement }) => {
  return (
    <>
      <div className="justify-self-end pr-4 text-lg font-semibold">{color}</div>
      <div className="justify-self-start">
        <span className="relative z-0 inline-flex rounded-md shadow-sm">
          <button
            type="button"
            className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
            onClick={increment}
          >
            <PlusIcon className="h-3 w-6 text-black" />
          </button>
          <button
            type="button"
            className="relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
            onClick={decrement}
          >
            <MinusIcon className="h-3 w-6 text-black" />
          </button>
        </span>
      </div>
    </>
  );
};

const ReducerComponent = () => {
  const [{ r, g, b }, dispatch] = useReducer(reducer, { r: 0, g: 0, b: 0 });

  return (
    <div className="pt-2 pb-6 text-center">
      <h1 className="pb-2 text-2xl font-bold">useReducer</h1>

      <div className="mx-auto grid max-w-xs grid-cols-2">
        <div
          style={{ color: `rgb(${r}, ${g}, ${b})` }}
          className="justify-self-end pr-4 text-lg font-bold"
        >
          Example:
        </div>
        <div className="justify-self-start text-lg font-normal">{`rgb(${r}, ${g}, ${b})`}</div>
      </div>

      <div className="mx-auto max-w-xs pt-2 pr-12">
        <div className="mx-auto grid w-48 grid-cols-2 gap-1">
          <Controls
            color="R"
            increment={() => dispatch({ type: INCREMENT_R })}
            decrement={() => dispatch({ type: DECREMENT_R })}
          ></Controls>

          <Controls
            color="G"
            increment={() => dispatch({ type: INCREMENT_G })}
            decrement={() => dispatch({ type: DECREMENT_G })}
          ></Controls>

          <Controls
            color="B"
            increment={() => dispatch({ type: INCREMENT_B })}
            decrement={() => dispatch({ type: DECREMENT_B })}
          ></Controls>
        </div>
      </div>
    </div>
  );
};

export default ReducerComponent;
