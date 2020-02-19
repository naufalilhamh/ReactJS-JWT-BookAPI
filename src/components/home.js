import React from "react";
import { Jumbotron, Spinner, Toast, ToastBody, ToastHeader } from "reactstrap";
const Home = () => {
  return (
    <Jumbotron>
      <h1 className="display-3">Hello, Selamat Datang!</h1>
      <p className="lead">
        <strong>Westrongsite ini menjelaskan singkat Kota bandung</strong>
        <br />
        Kota Bandung tidak berdiri bersamaan dengan pembentukan Kabupaten
        Bandung. Kota itu dibangun dengan tenggang waktu sangat jauh setelah
        Kabupaten Bandung berdiri. Kabupaten Bandung dibentuk pada sekitar
        pertengahan abad ke-17 Masehi, dengan Bupati pertama tumenggung
        Wiraangunangun. Beliau memerintah Kabupaten bandung hingga tahun 1681.
      </p>
      <hr className="my-2" />
      <div className="p-3 my-2 rounded">
        <Toast>
          <ToastHeader>Ingat !</ToastHeader>
          <ToastBody>
            <span>
              Menuju Fullstack Web Developer <Spinner color="success" />
            </span>
          </ToastBody>
        </Toast>
      </div>
    </Jumbotron>
  );
};
export default Home;
