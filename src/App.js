import { useContext } from "react";
import { divContext } from "./helper/divContext";
import { withSizeEffect } from "./HOC/withSizeEffect";
import logo from "./logo.svg";
import "./App.css";

let divHeights;
window.setDivHeight = (height) => divHeights = height;

const App = () => {
  const { divHeight, setDivHeight, targetRef, size } = useContext(divContext);

  return (
    <div
      className="App-header"
      ref={targetRef}
      style={{ height: divHeight + "px" }}
    >
      <img src={logo} className="App-logo" alt="logo" />

      <span className="width-details">
        Screen Width: {size.width}px
      </span>

      <div className="set-height">
        <label>Set Div Height</label>
        <input
          className="dimension-input"
          type="number"
          defaultValue={divHeight}
          onKeyPress={(e) => setDivHeight(Number(e.target.value))}
        />
      </div>
    </div>
  );
};

export default withSizeEffect(App);

