import { useState, useRef, useImperativeHandle, forwardRef } from "react";

const ElaborateInput = forwardRef(
  ({ hasError, placeholder, value, update }, ref) => {
    const inputRef = useRef();
    useImperativeHandle(ref, () => {
      return {
        focus() {
          inputRef.current.focus();
        },
      };
    });
    return (
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => update(e.target.value)}
        placeholder={placeholder}
        className="mx-2 w-32 rounded-md border border-gray-900 py-1 text-center shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        // style={{
        //   padding: "5px 15px",
        //   borderWidth: "3px",
        //   borderStyle: "solid",
        //   borderColor: hasError ? "crimson" : "#999",
        //   borderRadius: "5px",
        //   margin: "0 10px",
        //   textAlign: "center",
        // }}
      />
    );
  }
);

const ImperativeHandleComponent = () => {
  const [city, setCity] = useState("Seattle");
  const [state, setState] = useState("WA");
  const [error, setError] = useState("");
  const cityEl = useRef();
  const stateEl = useRef();

  function validate() {
    // stackOverflow : https://stackoverflow.com/a/25677072
    if (
      !/^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]+$/.test(
        city
      )
    ) {
      setError("city");
      cityEl.current.focus();
      return;
    }

    if (!/^[A-Z]{2}$/.test(state)) {
      setError("state");
      stateEl.current.focus();
      return;
    }

    setError("");
    alert("valid form!");
  }

  return (
    <div className="pt-2 pb-6 text-center">
      <h1 className="pb-4 text-2xl font-bold">useImperativeHandle</h1>
      <ElaborateInput
        hasError={error === "city"}
        placeholder={"City"}
        value={city}
        update={setCity}
        ref={cityEl}
      />
      <ElaborateInput
        hasError={error === "state"}
        placeholder={"State"}
        value={state}
        update={setState}
        ref={stateEl}
      />
      <button
        className="mx-2 inline-flex items-center rounded-md border border-transparent bg-blue-500 px-4 py-1 text-sm font-medium text-white focus:outline-none"
        onClick={validate}
      >
        Validate Form
      </button>
    </div>
  );
};

export default ImperativeHandleComponent;
