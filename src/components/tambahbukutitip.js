import React, { useState } from "react";
import axios from "axios";
function TambahBuku() {
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
    // <form onSubmit={handleSubmit}>
    //   <label>
    //     First Name:
    //     <input value={form.firstname} name="firstname" onChange={updateField} />
    //   </label>
    //   <br />
    //   <label>
    //     Last Name:
    //     <input value={form.lastname} name="lastname" onChange={updateField} />
    //   </label>
    //   <br />
    //   <button>Submit</button>
    // </form>
    <div className="container">
      <div className="cardregis">
        <div className="title">Form Tambah Buku</div>
        <hr />
        <form onSubmit={handleSubmit} className="px-5">
          <div className="form-group">
            <label className="labelbuku">Title Buku</label>
            <input
              className="form-control"
              type="text"
              name="title"
              placeholder="Masukkan Title"
              ref={register({
                required: "Harus Diisi",
                minLength: {
                  value: 5,
                  message: "Kurang Dari 5 Karakter"
                }
              })}
              onChange={updateField}
            />
            {errors.title && <span>{errors.title.message}</span>}
          </div>
          <div className="form-group">
            <label className="labelbuku">Author Buku</label>
            <input
              className="form-control"
              type="text"
              name="author"
              placeholder="Masukkan Author"
              ref={register({
                required: "Harus Diisi"
              })}
              onChange={updateField}
            />
            {errors.author && <span>{errors.author.message}</span>}
          </div>
          <div className="form-group">
            <label className="labelbuku">Published Date</label>
            <input
              className="form-control"
              type="date"
              name="published_date"
              ref={register({
                required: "Harus Diisi"
              })}
              onChange={updateField}
            />
            {errors.published_date && (
              <span>{errors.published_date.message}</span>
            )}
          </div>
          <div className="form-group">
            <label className="labelbuku">Page Buku</label>
            <input
              className="form-control"
              type="number"
              name="pages"
              placeholder="Masukkan Pages"
              ref={register({
                required: "Harus Diisi"
              })}
              onChange={updateField}
            />
            {errors.pages && <span>{errors.pages.message}</span>}
          </div>
          <div className="form-group">
            <label className="labelbuku">Language Buku</label>
            <input
              className="form-control"
              type="text"
              name="language"
              placeholder="Masukkan Language"
              ref={register({
                required: "Harus Diisi"
              })}
              onChange={updateField}
            />
            {errors.language && <span>{errors.language.message}</span>}
          </div>
          <div className="form-group">
            <label className="labelbuku">Published ID</label>
            <input
              className="form-control"
              type="text"
              name="published_id"
              placeholder="Masukkan Publisher ID"
              ref={register({
                required: "Harus Diisi"
              })}
              onChange={updateField}
            />
            {errors.published_id && <span>{errors.published_id.message}</span>}
          </div>
          <hr />
          <input
            className="btn btn-primary"
            type="submit"
            onClick={handleSubmit(onSubmit)}
          />
        </form>
      </div>
    </div>
  );
}
export default TambahBuku;
