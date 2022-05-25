import { useState, useEffect } from "react";

const EffectComponent = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setTimeout(() => setTime(new Date()), 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="pt-2 pb-6 text-center">
      <h1 className="pb-2 text-2xl font-bold">useEffect</h1>
      <div>{time.toLocaleTimeString()}</div>
    </div>
  );
};

export default EffectComponent;
