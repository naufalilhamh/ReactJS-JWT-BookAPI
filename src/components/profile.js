import React from "react";
import "../App.css";
// import Hello from "./components/hello";
// import Clock from "./components/clock";
import Greeting from "./greetings";
import Userprofile from "./userprofile";

function Profile() {
  return (
    //

    <div Col="mb-10">
      <Greeting name="nail" />
      <Userprofile />
      {/* <Counter /> */}
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

export default Profile;
