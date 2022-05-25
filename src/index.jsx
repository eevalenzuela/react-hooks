import { render } from "react-dom";
import State from "./State";
import Effect from "./Effect";
import Context from "./Context";
import Ref from "./Ref";
import Reducer from "./Reducer";
import Memo from "./Memo";
import Callback from "./Callback";
import LayoutEffect from "./LayoutEffect";
import ImperativeHandle from "./ImperativeHandle";
import DebugValue from "./DebugValue";

import "./index.css";

function App() {
  return (
    <div className="mx-auto h-full max-w-7xl bg-slate-50 px-4 sm:px-6 lg:px-8">
      <State />
      <hr className="border-black" />
      <Effect />
      <hr className="border-black" />
      <Context />
      <hr className="border-black" />
      <Ref />
      <hr className="border-black" />
      <Reducer />
      <hr className="border-black" />
      <Memo />
      <hr className="border-black" />
      <Callback />
      <hr className="border-black" />
      <LayoutEffect />
      <hr className="border-black" />
      <ImperativeHandle />
      <hr className="border-black" />
      <DebugValue />
    </div>
  );
}

render(<App className="bg-slate-50" />, document.getElementById("root"));
