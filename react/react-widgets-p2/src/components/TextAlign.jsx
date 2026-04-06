import { useState } from "react";

function TextAlign() {
  const [align, setAlign] = useState("Center");

  return (
    <div className="text-aligner">
      <h3 style={{ textAlign: align }}>Text Aligner: {align}</h3>
      <button id="left" onClick={() => setAlign("Left")}>
        Left
      </button>
      <button id="center" onClick={() => setAlign("Center")}>
        Center
      </button>
      <button id="right" onClick={() => setAlign("Right")}>
        Right
      </button>
    </div>
  );
}

export default TextAlign;
