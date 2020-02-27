import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Form } from "reactstrap";

function App() {
  const id_user = sessionStorage.getItem("Id");
  const url = "http://localhost:6767/orders/" + id_user;
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(url).then(json => setData(json.data.data.books));
  }, []);
  console.log(data);

  const renderTable = () => {
    return data.map(books => {
      return (
        <tr key={books.id}>
          <td>{books.id}</td>
          <td>{books.title}</td>
          <td>{books.author}</td>
          <td>{books.page}</td>
          <td>{books.publisher_id}</td>
        </tr>
      );
    });
  };
  return (
    <div>
      <h1 id="title">Daftar Buku Yang Dipinjam</h1>
      {/* <input type="text" class="search form-control" placeholder="Pencarian" /> */}
      <table id="tabelbor" className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>ID </th>
            <th>Judul</th>
            <th>Author</th>
            <th>Pages</th>
            <th>Penerbit</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
    </div>
  );
}
export default App;
