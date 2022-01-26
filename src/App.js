import { useState, useEffect } from "react";

import "./App.css";

function Checkbox() {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    alert(`checked: ${checked.toString()}`);
  });

  return (
    <>
      <input
        type="checkbox"
        value={checked}
        onChange={() => setChecked((checked) => !checked)}
      />
      {checked ? "checked" : "not checked"}
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Checkbox />
    </div>
  );
}

export default App;
