import React from "react";
const Username = props => <h5>Username Kamu : {props.Username}</h5>;

Username.defaultProps = {
  Username: "Pengguna"
};

export default Username;
