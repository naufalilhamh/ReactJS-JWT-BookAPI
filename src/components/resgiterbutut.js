import React, { useState } from "react";
import axios from "axios";

const TambahBuku = () => {
  const [form, setValues] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    roles: []
  });
  const printValues = e => {
    e.preventDefault();
    console.log(form.name, form.username, form.email, form.password);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:6767/register", {
        name: form.name,
        username: form.username,
        email: form.email,
        password: form.password,
        roles: ["user"]
      });
      console.log(form.name, form.username, form.email, form.password);
      // window.location.reload();
      if (result.status === 201) {
        alert("Register sucessfuly!");
        window.location.replace("/login");
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
        <div className="title">Form Register User</div>
        <form onSubmit={handleSubmit} className="px-4 ma">
          <div className="form-group">
            <label className="labelbuku">Nama </label>
            <input
              className="form-control"
              value={form.name}
              name="name"
              onChange={updateField}
            />
          </div>
          <label className="labelbuku">Username </label>
          <input
            className="form-control"
            value={form.username}
            name="username"
            onChange={updateField}
          />
          <label className="labelbuku">Email</label>
          <input
            className="form-control"
            type="email"
            value={form.email}
            name="email"
            onChange={updateField}
          />
          <label className="labelbuku">Password</label>
          <input
            className="form-control"
            type="password"
            value={form.password}
            name="password"
            onChange={updateField}
          />
          <br />
          <button
            type="submit"
            className="btn btn-outline-secondary btn-md mb-2"
          >
            Register
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary btn-md mb-2"
          >
            Clear
          </button>
        </form>
      </div>
    </div>
  );
};
export default TambahBuku;
