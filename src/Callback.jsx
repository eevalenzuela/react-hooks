import { useState, useEffect, useCallback, memo } from "react";

const ExpensiveComputationComponent = memo(({ compute, count }) => {
  return (
    <>
      <div className="justify-self-end">computed:</div>
      <div className="justify-self-start pl-4">{compute(count)}</div>

      <div className="justify-self-end">last re-render:</div>
      <div className="justify-self-start pl-4">
        {" "}
        {new Date().toLocaleTimeString()}
      </div>
    </>
  );
});

const CallbackComponent = () => {
  const [time, setTime] = useState(new Date());
  const [count, setCount] = useState(1);
  useEffect(() => {
    const timer = setTimeout(() => setTime(new Date()), 1000);
    return () => clearTimeout(timer);
  });

  const fibonacci = (n) => {
    if (n <= 1) {
      return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
  };

  return (
    <div className="pt-2 pb-6 text-center">
      <h1 className="pb-2 text-2xl font-bold">useCallback</h1>

      <div className="mx-auto grid max-w-xs grid-cols-2">
        <div className="justify-self-end">Example:</div>
        <div className="justify-self-start pl-4">
          {time.toLocaleTimeString()}
        </div>
        <button
          className="justify-self-end"
          onClick={() => setCount(count + 1)}
        >
          current count:
        </button>
        <div className="justify-self-start pl-4">{count}</div>
        <ExpensiveComputationComponent
          compute={useCallback(fibonacci, [])}
          count={count}
        />
      </div>
    </div>
  );
};

export default CallbackComponent;
