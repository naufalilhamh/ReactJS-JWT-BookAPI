import React from "react";
const Username = props => <h5>Nama Gubernur : {props.Username}</h5>;

Username.defaultProps = {
  Username: "Pak Kamil"
};

export default Username;
