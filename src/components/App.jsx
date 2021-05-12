import React, { useState } from "react";

function App() {
  const [state, setState] = useState(new Date().toLocaleTimeString("en-GB"));

  setInterval(() => {
    setState(new Date().toLocaleTimeString("en-GB"));
  }, 1000);

  return (
    <div className="container">
      <h1>{state}</h1>
      <button>Live 24-hour time</button>
    </div>
  );
}

export default App;
