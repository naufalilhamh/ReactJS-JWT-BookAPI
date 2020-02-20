import React, { useState } from "react";
import axios from "axios";

const TambahBuku = () => {
  const [form, setValues] = useState({
    title: "",
    author: "",
    published_date: "",
    pages: "",
    language: "",
    publisher_id: ""
  });
  const printValues = e => {
    e.preventDefault();
    console.log(
      form.title,
      form.author,
      form.published_date,
      form.pages,
      form.language,
      form.publisher_id
    );
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:3000/books", {
        title: form.title,
        author: form.author,
        published_date: form.published_date,
        pages: form.pages,
        language: form.language,
        publisher_id: form.publisher_id
      });

      if (result.status === 201) {
        alert("Data inserted sucessfuly!");
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
        <div className="title">Form Tambah Buku</div>
        <form onSubmit={handleSubmit} className="px-4 ma">
          <div className="form-group">
            <label className="labelbuku">Title Buku </label>
            <input
              className="form-control"
              value={form.title}
              name="title"
              onChange={updateField}
            />
          </div>
          <label className="labelbuku">Author: </label>
          <input
            className="form-control"
            value={form.author}
            name="author"
            onChange={updateField}
          />
          <label className="labelbuku">Published Date:</label>
          <input
            className="form-control"
            type="date"
            value={form.published_date}
            name="published_date"
            onChange={updateField}
          />
          <label className="labelbuku">Pages:</label>
          <input
            className="form-control"
            type="number"
            value={form.pages}
            name="pages"
            onChange={updateField}
          />

          <label className="labelbuku">Language</label>
          <input
            className="form-control"
            value={form.language}
            name="language"
            onChange={updateField}
          />

          <label className="labelbuku">Publisher ID </label>
          <input
            className="form-control"
            value={form.publisher_id}
            name="publisher_id"
            onChange={updateField}
          />

          <br />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};
export default TambahBuku;
