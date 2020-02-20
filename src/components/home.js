import React from "react";
import Logo from "./buku.jpeg";
import { Jumbotron } from "reactstrap";
const Home = () => {
  return (
    <Jumbotron>
      <h2>
        Hello, Selamat Datang! <br /> Kadang Membaca Bisa Membuatmu Pintar{" "}
      </h2>
      <font>*tergantung apa yang dibaca</font>
      <p className="lead">
        <div>
          <img src={Logo} width="1000px" height="300px" />
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
