import { useState } from "react";
import "./App.css";

const tabs = [
  { tabName: "First Tab" },
  { tabName: "Second Tab" },
  { tabName: "Third Tab" },
  { tabName: "Fourth Tab" },
];

function App() {
  const [tab, setTab] = useState(0);
  return (
    <div className="container">
      <ul>
        {tabs.map((e) => {
          return <li>{e.tabName}</li>;
        })}
      </ul>
      <div className="dataHolder">
        Clicking each tab should hide the content of the other tab and show the
        content of clicked tab. By default, enable the first tab.
        <div>{tabs[tab].tabName} content to be displayed here.</div>
        Add some dummy content or just add a simple text showing the tab.
      </div>
    </div>
  );
}

export default App;
