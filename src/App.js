import React from "react";
import PageNav from "./PageNav";
import "./styles.css";

export default function App() {
  return (
    <div className="App"
      style={{ border: 'solid 1px #ccc', padding: '2rem', width: '300px', margin: 'auto' }}>
      <h4>Replace useState with useReducer</h4>
      <hr />
      <div>
        <PageNav />
      </div>

    </div>
  );
}
