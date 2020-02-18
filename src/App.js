import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import Hello from "./components/hello";
// import Clock from "./components/clock";
import Greeting from "./components/greetings";
import { Container } from "reactstrap";
function App() {
  return (
    <div>
      {/* <Hello name="FAL" asalkota="Bandung" /> */}
      <Greeting name="FAL" age="10" gender="Pria" />
    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
