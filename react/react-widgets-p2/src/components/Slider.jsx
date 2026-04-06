import { useState } from "react";

function Slider() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  return (
    <div
      className="slider-aligner"
      style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})` }}
    >
      <h2>Slider</h2>
      <div className="inputs">
        <input
          onChange={(e) => setRed(e.target.value)}
          type="range"
          min="0"
          max="255"
          value={red}
        />
        Red
        <input
          onChange={(e) => setGreen(e.target.value)}
          type="range"
          min="0"
          max="255"
          value={green}
        />
        Green
        <input
          onChange={(e) => setBlue(e.target.value)}
          type="range"
          min="0"
          max="255"
          value={blue}
        />
        Blue
      </div>
    </div>
  );
}

export default Slider;
