import { useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const StateComponent = () => {
  const [isGreen, setIsGreen] = useState(true);

  return (
    <div className="pt-2 pb-6 text-center">
      <h1 className="pb-3 text-2xl font-bold">useState</h1>
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
    </div>
  );
};

export default StateComponent;
