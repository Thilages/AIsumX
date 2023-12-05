import React from "react";
import "./App.css";
import '@radix-ui/themes/styles.css';
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";

const App = () => {
  return (
    <div>
      <div className="main">
        <div className="app">
          <Navbar/>
          <Hero />
          
        </div>
      </div>
    </div>
  );
};

export default App;
