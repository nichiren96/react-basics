import "./App.css";

const lakeList = ["Echo Lake", "Maud Lake", "Cascade Lake"];

function LakeList({ lakes }) {
  return (
    <ol>
      {lakes.map((lake) => (
        <li>{lake}</li>
      ))}
    </ol>
  );
}

function App() {
  return (
    <div className="App">
      <LakeList lakes={lakeList} />
    </div>
  );
}

export default App;
