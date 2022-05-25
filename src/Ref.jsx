import { useState, useRef } from "react";

const RefComponent = () => {
  const [stateNumber, setStateNumber] = useState(0);
  const numRef = useRef(0);

  function incrementAndDelayLogging() {
    setStateNumber(stateNumber + 1);
    numRef.current++;
    setTimeout(
      () => alert(`state: ${stateNumber} | ref: ${numRef.current}`),
      1000
    );
  }

  return (
    <div className="pt-2 pb-6 text-center">
      <h1 className="pb-3 text-2xl font-bold">useRef</h1>
      <button
        className="mx-2 inline-flex items-center rounded-md border border-transparent bg-blue-500 px-4 py-1 text-sm font-medium text-white focus:outline-none"
        onClick={incrementAndDelayLogging}
      >
        Delay Logging
      </button>
      <h4 className="pt-2">state: {stateNumber}</h4>
      <h4>ref: {numRef.current}</h4>
    </div>
  );
};

export default RefComponent;
