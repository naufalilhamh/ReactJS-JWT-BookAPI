import React from "react";
import "./App.css";
// import Hello from "./components/hello";
// import Clock from "./components/clock";
import Greeting from "./components/greetings";
import Userprofile from "./components/userprofile";
import { Container, Col, Row } from "reactstrap";
import UsingHook from "./components/usinghook";
import Example from "./components/usinghook2";
function App() {
  return (
    //

    <div>
      <div>
        <center>
          <Greeting name="OFAL" age="23" gender="Pria" />
        </center>
      </div>
      <Userprofile />
      {/* <UsingHook />
      <Example /> */}
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
