import { useState } from "react";

import "./App.css";

function App() {
  const [status, setStatus] = useState("Open");

  return (
    <div className="App">
      <h1>Status: {status}</h1>
      <button onClick={() => setStatus("Open")}>Open</button>
      <button onClick={() => setStatus("Back in 5")}>Break</button>
      <button onClick={() => setStatus("Closed")}>Closed</button>
    </div>
  );
}

export default App;
