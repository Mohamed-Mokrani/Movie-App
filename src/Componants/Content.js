import { useState } from "react";

function Content() {
  const [showInput, setShowInput] = useState(false);

  function handleButtonClick() {
    setShowInput(true);
  }

  return (
    <div>
      <button onClick={handleButtonClick}>Show Input</button>
      {showInput && (
        <div>
          <label htmlFor="name-input">Enter your name:</label>
          <input type="text" id="name-input" />
        </div>
      )}
    </div>
  );
}

export default Content;
