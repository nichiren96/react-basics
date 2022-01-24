import "./App.css";

function Lake({ name }) {
  return <h1>Visit {name} !</h1>;
}

function SkiResort({ name }) {
  return (
    <div>
      <h1>Visit {name} !</h1>
    </div>
  );
}

function Display() {
  return (
    <>
      <Lake name="Lake Taho" />
      <SkiResort name="Ophir Resort" />
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Display />
    </div>
  );
}

export default App;
