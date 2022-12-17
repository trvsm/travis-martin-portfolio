import { useState } from "react";

import "./App.scss";
import Header from "./components/header/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  );
}

export default App;
