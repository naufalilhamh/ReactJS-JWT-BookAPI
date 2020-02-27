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
import RegisterUser from "./components/registeruser";
import Logout from "./components/logout";
import Login from "./components/login";
import ListUser from "./components/listuser";
import UpdateRole from "./components/updaterole";
import PinjamBuku from "./components/pinjambuku";
import ListPinjamPerID from "./components/listpinjam";
import DetailPinjam from "./components/detailpinjam";
// import Profile from "./components/profile";
// import About from "./components/about";
// import Validasi from "./components/challenge-validasi";
// import Form from "./validasi/FormHook";
// import MultiHandling from "./components/multihandling";
// import Handling from "./components/handling";
const role = sessionStorage.getItem("Role");

const routing = (
  <Router>
    <Switch>
      <Main>
        {(() => {
          if (role === "ADMIN") {
            return (
              <>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/daftarbuku" component={DaftarBuku} />
                  <Route path="/listuser" component={ListUser} />
                  <Route path="/detailpinjam/:id" component={DetailPinjam} />

                  <Route path="/tambahbuku" component={TambahBuku} />
                  <Route path="/updatebuku/:id" component={Updatebuku} />
                  <Route path="/logout" component={Logout} />
                  <Route path="/updaterole/:id" component={UpdateRole} />
                  <Route component={Notfound} />
                </Switch>
              </>
            );
          } else if (role === "USER") {
            return (
              <>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/daftarbuku" component={DaftarBuku} />
                  <Route path="/listpinjamid" component={ListPinjamPerID} />
                  <Route path="/pinjambuku/:id_buku" component={PinjamBuku} />
                  <Route path="/logout" component={Logout} />
                  <Route component={Notfound} />
                </Switch>
              </>
            );
          } else {
            return (
              <>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/login" component={Login} />
                  <Route path="/registeruser" component={RegisterUser} />
                  <Route component={Notfound} />
                </Switch>
              </>
            );
          }
        })()}
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
