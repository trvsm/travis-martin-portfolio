import { useState } from "react";

import "./App.scss";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (<>
      <Header />
      <Hero />

    <div className="App">
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  </>
  );
}

export default App;
