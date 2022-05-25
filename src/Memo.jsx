import { useState, useMemo } from "react";

import { PlusSmIcon as PlusSmIconSolid } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const fibonacci = (n) => {
  if (n <= 1) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
};

const MemoComponent = () => {
  const [num, setNum] = useState(1);
  const [isGreen, setIsGreen] = useState(true);
  const fib = useMemo(() => fibonacci(num), [num]);

  return (
    <div className="pt-2 pb-6 text-center">
      <h1 className="pb-4 text-2xl font-bold">useMemo</h1>
      <button
        type="button"
        className={classNames(
          isGreen ? "bg-green-500" : "bg-blue-500",
          "inline-flex items-center rounded-md border border-transparent px-4 py-1 text-sm font-medium text-white focus:outline-none"
        )}
        onClick={() => setIsGreen(!isGreen)}
      >
        Example
      </button>

      <h2 className="py-4">
        Fibonacci of {num} is {fib}
      </h2>

      <button
        type="button"
        className="inline-flex items-center rounded-full border border-transparent bg-blue-500 p-2 text-white shadow-sm"
        onClick={() => setNum(num + 1)}
      >
        <PlusSmIconSolid className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  );
};

export default MemoComponent;
