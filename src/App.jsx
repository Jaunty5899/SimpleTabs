import { useState } from "react";
import "./App.css";

const tabs = [
  {
    tabName: "First Tab",
    tabData:
      "The sun shone brightly in the clear blue sky. Birds chirped merrily as they flitted from tree to tree. A gentle breeze rustled the leaves, creating a soothing melody.",
  },
  {
    tabName: "Second Tab",
    tabData:
      "The bustling city streets were alive with activity. Pedestrians hurried along the sidewalks, weaving through the traffic. Towering skyscrapers cast long shadows over the busy intersections below.",
  },
  {
    tabName: "Third Tab",
    tabData:
      "The waves crashed against the rocky shoreline, their rhythmic roar filling the air. Seagulls soared overhead, their cries echoing across the vast expanse of the ocean. The salty tang of the sea breeze invigorated the senses.",
  },
  {
    tabName: "Fourth Tab",
    tabData:
      "The forest floor was carpeted with a thick layer of fallen leaves. Sunlight filtered through the canopy of trees, casting a warm glow on the mossy undergrowth. The air was filled with the earthy scent of damp soil and decaying foliage.",
  },
];

function App() {
  const [tab, setTab] = useState(0);
  return (
    <div className="container">
      <ul>
        {tabs.map((e) => {
          return (
            <li
              className={tab === tabs.indexOf(e) ? "active" : null}
              onClick={() => {
                setTab(tabs.indexOf(e));
              }}
            >
              {e.tabName}
            </li>
          );
        })}
      </ul>
      <div className="dataHolder">
        Clicking each tab should hide the content of the other tab and show the
        content of clicked tab. By default, enable the first tab.
        <div className="tabData">{tabs[tab].tabData}</div>
        Add some dummy content or just add a simple text showing the tab.
      </div>
    </div>
  );
}

export default App;
