import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home";
import Main from "./layouts/main";
import DaftarBuku from "./components/axios";
import TambahBuku from "./components/tambahbuku";
import Notfound from "./components/notfound";
import Updatebuku from "./components/ubahbuku";
// import Profile from "./components/profile";
// import About from "./components/about";
// import Validasi from "./components/challenge-validasi";
// import Form from "./validasi/FormHook";
// import MultiHandling from "./components/multihandling";
// import Handling from "./components/handling";

const routing = (
  <Router>
    <Switch>
      <Main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/daftarbuku" component={DaftarBuku} />
          <Route path="/tambahbuku" component={TambahBuku} />
          <Route path="/updatebuku/:id" component={Updatebuku} />
          <Route component={Notfound} />
        </Switch>
      </Main>
    </Switch>
  </Router>
);
// ReactDOM.render(<App />, document.getElementById("root"));

ReactDOM.render(routing, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
