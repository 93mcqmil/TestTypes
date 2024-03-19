import { useState } from "react";
import Header from "./Components/Header";

import "./App.css";
import Counter from "./Components/Counter";

function App() {
  return (
    <>
      {/* <Header>
        Rubrik och <span>ngt mer?</span>
      </Header> */}
      <Counter />
    </>
  );
}

export default App;
