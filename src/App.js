import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Components/NavBar/Navbar";
import Home from "./Components/Pages/Home";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Route path="/" exact component={Home} />
      </Router>
    </div>
  );
}

export default App;
