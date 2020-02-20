import React, { useState, useEffect } from "react";
import axios from "axios";

// function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await axios("http://localhost:3000/books");
//       setData(result.data);
//     };
//     fetchData();
//   }, []);
function App() {
  const url = "http://localhost:3000/books";
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(url).then(json => setData(json.data));
  }, []);

  const renderTable = () => {
    return data.map(books => {
      return (
        <tr key={books._id}>
          <td>{books._id}</td>
          <td>{books.title}</td>
          <td>{books.author}</td>
          <td>{books.published_date}</td>
          <td>{books.pages}</td>
          <td>{books.language}</td>
          <td>{books.publisher_id}</td>
          <td>
            <button
              type="button"
              className="btn btn-secondary btn-sm mt-1"
              width="10px"
            >
              <i class="fa fa-gear"></i>
              Edit
            </button>
            <button type="button" className="btn btn-danger  btn-sm mt-1">
              <i class="fa fa-trash"></i>
              Hapus
            </button>
          </td>
        </tr>
      );
    });
  };
  return (
    <div>
      <h1 id="title">Daftar Buku</h1>
      {/* <input type="text" class="search form-control" placeholder="Pencarian" /> */}
      <table id="tabelbor" className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Published Date</th>
            <th>Pages</th>
            <th>Language</th>
            <th>Publisher Id</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
    </div>
  );
  //   return (
  //     <ul>
  //       {data.hits.map(item => (
  //         <li key={item.objectID}>
  //           <a href={item.url}>{item.title}</a> <span>{item.author}</span>
  //         </li>
  //       ))}
  //     </ul>
  //   );
}
export default App;
