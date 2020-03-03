import React from "react";
import { BrowserRouter } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
import Layout from "./layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  );
}

export default App;
