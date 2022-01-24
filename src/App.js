import "./App.css";

function Hello({ library, message, number }) {
  return (
    <div>
      <h1>Welcome to {library}</h1>
      <p>{message}</p>
      <p>{number} Props Total</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Hello library="React" message="It's really cool" number={3} />
    </div>
  );
}

export default App;
