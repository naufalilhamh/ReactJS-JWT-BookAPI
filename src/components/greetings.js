import React from "react";
const Greetings = props => (
  <h4 className="bg-primary text-white text-center p-2">
    Hallo Selamat belajar {props.name}. Umur Kamu sekarang{props.age}, Gender
    Kamu{props.gender}
  </h4>
);
Greetings.defaultProps = {
  name: "User"
};
export default Greetings;
