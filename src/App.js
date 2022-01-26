import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [val, setVal] = useState("");
  const [val2, setVal2] = useState("");

  useEffect(() => {
    console.log(`field 1 ${val}`);
  }, [val]);
  useEffect(() => {
    console.log(`field 2 ${val2}`);
  }, [val2]);

  return (
    <div className="App">
      <label>
        Favorite Phrase:
        <input
          type="text"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
      </label>{" "}
      <br />
      <label>
        Second Favorite Phrase:
        <input
          type="text"
          value={val2}
          onChange={(e) => setVal2(e.target.value)}
        />
      </label>
    </div>
  );
}

export default App;
