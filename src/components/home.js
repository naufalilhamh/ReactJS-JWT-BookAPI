import React from "react";
import Logo from "./buku.jpeg";
import { Jumbotron } from "reactstrap";
const role = sessionStorage.getItem("Role");
const Home = () => {
  return (
    <Jumbotron>
      <h2>
        Hello, Selamat Datang! {role} <br /> Kadang Membaca Bisa Membuatmu
        Pintar{" "}
      </h2>
      <p className="lead">
        <div>
          <img src={Logo} width="1200px" height="400px" />
        </div>
      </p>
      {/* <div className="p-3 my-2 rounded">
        <Toast>
          <ToastHeader>Ingat !</ToastHeader>
          <ToastBody>
            <span>
              Menuju Fullstack Web Developer <Spinner color="success" />
            </span>
          </ToastBody>
        </Toast>
      </div> */}
    </Jumbotron>
  );
};
export default Home;
