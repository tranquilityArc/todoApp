import { useState } from "react";

import "./App.css";

function App() {
  return (
    <div>
      <input type="text" placeholder="Enter Task" />
      <br />
      <input type="text" placeholder="Enter Description" />
      <br />

      <button>Add Task</button>
    </div>
  );
}

export default App;
