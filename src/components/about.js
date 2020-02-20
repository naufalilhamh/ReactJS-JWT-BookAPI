import React from "react";
import { Jumbotron } from "reactstrap";
class About extends React.Component {
  render = () => (
    <Jumbotron>
      <h1 className="display-3">About US!</h1>
      <p className="lead">
        Kota Bandung adalah kota metropolitan terbesar di Provinsi Jawa Barat,
        sekaligus menjadi ibu kota provinsi tersebut. Kota ini terletak 140 km
        sebelah tenggara Jakarta, dan merupakan kota terbesar di wilayah Pulau
        Jawa bagian selatan.
      </p>
      <hr className="my-2" />

      <p className="lead">
        <div>
          <h3>Alamat Kami</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.900714196073!2d107.61662131438686!3d-6.902475869467464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e64c5e8866e5%3A0x37be7ac9d575f7ed!2sGEDUNG%20SATE!5e0!3m2!1sid!2sid!4v1582165473739!5m2!1sid!2sid"
            width="1230"
            height="600"
            frameborder="0"
            allowfullscreen=""
          ></iframe>
        </div>
      </p>
    </Jumbotron>
  );
}
export default About;
