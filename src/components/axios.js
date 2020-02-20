import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({ hits: [] });
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://hn.algolia.com/api/v1/search?query=redux"
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  const renderTable = () => {
    return data.hits.map(item => {
      return (
        <tr>
          <td>{item.title}</td>
          <td>{item.author}</td>
          <td>{item.created_at}</td>
          <td>{item.points}</td>
          <td>{item.num_comments}</td>
          <td>{item.relevancy_score}</td>
        </tr>
      );
    });
  };
  return (
    <div>
      <h1 id="title">API Table</h1>
      <input type="text" class="search form-control" placeholder="Pencarian" />
      <table id="tabelbor" className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Created At</th>
            <th>Point</th>
            <th>Num Comment</th>
            <th>Skor Relevansi</th>
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
