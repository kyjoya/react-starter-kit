import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import "../node_modules/skeleton-css/css/skeleton.css";

function App() {
  return (
    <div className="container">
      <header className="row">
        <div className="one column">Hello</div>
        <div className="eleven columns">World</div>
      </header>
    </div>
  );
}

export default App;
