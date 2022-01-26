import { useState } from "react";

import "./App.css";

function App() {
  const [year, setYear] = useState(2022);
  const [manager, setManager] = useState("Andy");
  const [status, setStatus] = useState("Open");

  return (
    <>
      <div className="App">
        <h1>{year}</h1>
        <button onClick={() => setYear(year + 1)}>New Year</button>
      </div>
      <div className="App">
        <h1>Manager on Duty: {manager}</h1>
        <button onClick={() => setManager("Emily")}>New Manager</button>
      </div>
      <div className="App">
        <h1>Status: {status}</h1>
        <button onClick={() => setStatus("Open")}>Open</button>
        <button onClick={() => setStatus("Back in 5")}>Break</button>
        <button onClick={() => setStatus("Closed")}>Closed</button>
      </div>
    </>
  );
}

export default App;
