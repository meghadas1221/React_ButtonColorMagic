import { useState } from "react";
import "./styles.css";

export default function App() {
  var [mouseOverColor, setMouseOverColor] = useState("green");

  function mouseOverColorHandler(event) {
    var redColor = "red";
    var greenColor = "green";

    if (mouseOverColor === redColor) {
      setMouseOverColor(greenColor);
    } else setMouseOverColor(redColor);
  }

  return (
    <div className="App">
      <h1>Button Colour Magic</h1>
      <button
        style={{ backgroundColor: mouseOverColor }}
        onClick={mouseOverColorHandler}
      >
        Click Me To See The Magic
      </button>
    </div>
  );
}
