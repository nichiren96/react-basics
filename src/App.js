import "./App.css";

const lakeList = [
  { id: "1", name: "Echo", trailhead: "Echo" },
  { id: "2", name: "Maud", trailhead: "Wrights" },
  { id: "3", name: "Velma", trailhead: "Bayview" },
];

function LakeList({ lakes }) {
  return (
    <div>
      {lakes.map((lake) => (
        <div key={lake.id}>
          <h2>{lake.name}</h2>
          <p>Accessed by: {lake.trailhead}</p>
        </div>
      ))}
    </div>
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
