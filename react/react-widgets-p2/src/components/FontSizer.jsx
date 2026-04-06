import { useState } from "react";

function FontSizer() {
  const [pixels, setPixels] = useState(20);

  return (
    <div className="font-sizer">
      <h3 style={{ fontSize: pixels }}> Pixel sizer: {pixels}</h3>
      <button
        id="increase"
        onClick={() => setPixels((prevState) => prevState + 5)}
      >
        Increase
      </button>
      <button
        id="decrease"
        onClick={() => setPixels((prevState) => prevState - 5)}
      >
        Decrease
      </button>
    </div>
  );
}

export default FontSizer;
