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

      {/* <p className="lead">
          <div>
            
          </div>
        </p> */}
    </Jumbotron>
  );
}
export default About;
