import { useState } from "react";
import "./App.css";

const tabs = [
  { tabName: "First Tab" },
  { tabName: "Second Tab" },
  { tabName: "Third Tab" },
  { tabName: "Fourth Tab" },
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <ul>
        {tabs.map((e) => {
          return <li>{e.tabName}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
