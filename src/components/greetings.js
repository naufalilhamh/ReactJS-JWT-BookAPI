import React from "react";

const Greetings = props => (
  <h4 className="bg-primary text-white text-center p-2">
    Hallo Happy Listening {props.name} <br /> Age Kamu sekarang {props.age}{" "}
    Tahun
    <br />
    Gender Kamu {props.gender}
  </h4>
);
Greetings.defaultProps = {
  name: "User",
  age: "20",
  gender: "Pria"
};
export default Greetings;
