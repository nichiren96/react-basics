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

function Display({ season }) {
  return (
    <div>
      {season === "summer" ? (
        <Lake name="Jenny Lake" />
      ) : season === "winter" ? (
        <SkiResort name="JHMMR" />
      ) : (
        <h1>Comme back in winter or summer</h1>
      )}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Display season="winter" />
    </div>
  );
}

export default App;
