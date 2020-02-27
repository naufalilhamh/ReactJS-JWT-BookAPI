import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Form } from "reactstrap";

function App() {
  const url = "http://localhost:6767/users";
  const [data, setData] = useState({ data: [] });
  const id_user = sessionStorage.getItem("Id");

  useEffect(() => {
    axios.get(url).then(json => setData(json.data));
  }, []);
  console.log(data.data);

  const renderTable = () => {
    let no = 1;
    return data.data.map(user => {
      return (
        <tr key={user.id}>
          <td>{no++}</td>
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>
            {(() => {
              if (user.id == id_user) {
                return (
                  <>
                    <Link to={"/updaterole/" + user.id}>
                      <button
                        type="button"
                        className="btn btn-danger btn-sm mt-1"
                        width="10px"
                        disabled
                      >
                        <i className="fa fa-key"> </i>
                        Edit Roles Locked
                      </button>
                    </Link>
                  </>
                );
              } else {
                return (
                  <>
                    <Link to={"/updaterole/" + user.id}>
                      <button
                        type="button"
                        className="btn btn-secondary btn-sm mt-1"
                        width="10px"
                      >
                        <i className="fa fa-gear"> </i>
                        Edit Roles
                      </button>
                    </Link>
                    <Link to={"/detailpinjam/" + user.id}>
                      <button
                        type="button"
                        className="btn btn-primary btn-sm mt-1"
                        width="10px"
                      >
                        <i className="fa fa-eye"> </i>
                        Lihat Peminjaman
                      </button>
                    </Link>
                  </>
                );
              }
            })()}
          </td>
        </tr>
      );
    });
  };
  return (
    <div>
      <h1 id="title">Daftar User</h1>
      {/* <input type="text" class="search form-control" placeholder="Pencarian" /> */}
      <table id="tabelbor" className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>No </th>
            <th>Nama</th>
            <th>Username</th>
            <th>Email</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
    </div>
  );
}
export default App;
