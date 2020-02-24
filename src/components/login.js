import React, { useState } from "react";
import axios from "axios";

const TambahBuku = () => {
  const [form, setValues] = useState({
    username: "",
    password: ""
  });
  const printValues = e => {
    e.preventDefault();
    console.log(form.username, form.password);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:6767/login", {
        username: form.username,
        password: form.password
      });
      console.log(form.username, form.password);
      console.log(result.data.accessToken);
      // window.location.reload();
      if (result.status === 200) {
        console.log(result);
        // alert("Login Berhasil sucessfuly!");
        // window.location.replace("/");
      } else {
        throw new Error("Failed to insert data!");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const updateField = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    });
  };
  return (
    <div className="container">
      <div className="cardregis">
        <div className="title">Form Login User</div>
        <form onSubmit={handleSubmit} className="px-4 ma">
          <div className="form-group">
            <label className="labelbuku">Username </label>
            <input
              className="form-control"
              value={form.username}
              name="username"
              onChange={updateField}
            />
          </div>
          <label className="labelbuku">Password </label>
          <input
            className="form-control"
            type="password"
            value={form.password}
            name="password"
            onChange={updateField}
          />
          <br />
          <button>Masuk</button>
        </form>
      </div>
    </div>
  );
};
export default TambahBuku;
