import { useState, useEffect } from "react";

import "./App.css";

function UserItem({ name, mail }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{mail}</p>
    </div>
  );
}

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/users`)
      .then((res) => res.json())
      .then(setUser)
      .catch(console.error);
  }, []);

  if (user) {
    return (
      <div className="App">
        {user.map((item, index) => (
          <UserItem key={index} name={item.name} mail={item.email} />
        ))}
      </div>
    );
  }

  return null;
}

export default App;
