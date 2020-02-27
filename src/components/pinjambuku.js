import React, { useState } from "react";
import axios from "axios";

function App(props) {
  let id_buku = props.match.params.id;
  let id_user = sessionStorage.getItem("Id");

  axios.post("http://localhost:6767/orders/" + id_buku + "/" + id_user);
  console.log(id_buku);
  // window.location.reload();
  //   if (result.status === 201) {
  //     alert("Pinjam Buku sucessfuly!");
  //     window.location.replace("/");
  //   } else {
  //     throw new Error("Failed to insert data!");
  //   }
}
export default App;
