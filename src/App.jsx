import { useState } from "react";

import "./App.scss";
import ElevatorBio from "./components/elevatorBio/ElevatorBio";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import Technologies from "./components/technologies/Technologies";

function App() {
  const [count, setCount] = useState(0);

  return (<>
      <Header />
      <Hero />
      <Projects/>
      <ElevatorBio/>
      <Technologies/>

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
