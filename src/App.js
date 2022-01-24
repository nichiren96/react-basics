import "./App.css";

function Lake({ name }) {
  return <h1>{name}</h1>;
}

function App() {
  return (
    <div className="App">
      <Lake name="Lake Taho" />
      <Lake name="Angora Lake" />
      <Lake name="Shirley Lake" />
    </div>
  );
}

export default App;
