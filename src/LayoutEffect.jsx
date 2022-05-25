import { useState, useLayoutEffect, useRef } from "react";

const LayoutEffectComponent = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const el = useRef();

  useLayoutEffect(() => {
    setWidth(el.current.clientWidth);
    setHeight(el.current.clientHeight);
  });

  return (
    <div className="pt-2 pb-6 text-center">
      <h1 className="pb-2 text-2xl font-bold">useLayoutEffect</h1>
      <div className="mx-auto grid max-w-xs grid-cols-2">
        <div className="justify-self-end">textarea width:</div>
        <div className="justify-self-start pl-4">{width}px</div>

        <div className="justify-self-end">textarea height:</div>
        <div className="justify-self-start pl-4">{height}px</div>
      </div>

      <textarea
        onClick={() => {
          setWidth(0);
        }}
        rows={4}
        name="comment"
        className="mt-4 w-72 rounded-md border border-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        defaultValue={""}
        ref={el}
      />
    </div>
  );
};

export default LayoutEffectComponent;
