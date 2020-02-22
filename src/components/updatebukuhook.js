import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

const UpdateBook = props => {
  var url = "http://localhost:3000/books/" + props.match.params.id;

  const formInitialState = {
    error: "",
    data: [
      {
        id: "",
        title: "",
        author: "",
        published_date: "",
        pages: "",
        language: "",
        publisher_id: "",
        createdAt: "",
        updatedAt: ""
      }
    ]
  };

  const [data, setData] = useState(formInitialState);

  useEffect(() => {
    axios.get(url).then(json => setData(json.data));
  }, []);
  console.log(data.data[0].id);

  const updateField = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const result = await axios.put(url, {
        title: data.title,
        author: data.author,
        published_date: data.published_date,
        pages: data.pages,
        language: data.language,
        publisher_id: data.publisher_id
      });
      // window.location.reload();
      if (result.status === 201) {
        alert("Update book sucessfuly!");
        window.location.replace("/daftarbuku");
      } else {
        throw new Error("Failed to update data!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <div className="cardregis">
        <div className="title">Form Update Buku</div>
        <form onSubmit={handleSubmit} className="px-4 ma">
          <div className="form-group">
            <label className="labelbuku">Title Buku </label>
            <input
              className="form-control"
              value={data.data[0].title}
              name="title"
              onChange={updateField}
            />
          </div>
          <label className="labelbuku">Author: </label>
          <input
            className="form-control"
            value={data.data[0].author}
            name="author"
            onChange={updateField}
          />
          <label className="labelbuku">Published Date:</label>
          <input
            className="form-control"
            type="date"
            value={moment(data.data[0].published_date).format("YYYY-MM-DD")}
            name="published_date"
            onChange={updateField}
          />
          <label className="labelbuku">Pages:</label>
          <input
            className="form-control"
            type="number"
            value={data.data[0].pages}
            name="pages"
            onChange={updateField}
          />

          <label className="labelbuku">Language</label>
          <input
            className="form-control"
            value={data.data[0].language}
            name="language"
            onChange={updateField}
          />

          <label className="labelbuku">Publisher ID </label>
          <input
            className="form-control"
            value={data.data[0].publisher_id}
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

export default UpdateBook;
