import React, { Component } from "react";
import axios from "axios";

export default class UbahBuku extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        id: "",
        title: "",
        author: "",
        published_date: "",
        page: "",
        language: "",
        publisher_id: "",
        createdAt: "",
        updatedAt: ""
      }
    };
  }

  componentDidMount = async () => {
    const id = this.props.match.params.id;
    const res = await axios.get("http://localhost:6767/books/" + id);
    console.log(res.data.data);
    this.setState(res.data.data);
  };

  ambilPerubahan = e => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    this.setState({ [name]: value });
  };

  ambilupdate = async e => {
    const id = this.props.match.params.id;

    e.preventDefault();

    await axios.put("http://localhost:6767/books/" + id, this.state);
    alert("Update Buku Berhasil");
    this.props.history.push("/daftarbuku");
  };

  render() {
    return (
      <div className="container">
        <div className="cardregis">
          <div className="title">Form Update Buku</div>
          <form onSubmit={this.ambilupdate}>
            <div className="container mt-5">
              <div className="form-group">
                <label>Title Buku</label>
                <input
                  name="title"
                  type="text"
                  className="form-control"
                  value={this.state.title}
                  onChange={this.ambilPerubahan}
                />
              </div>
              <div className="form-group">
                <label>Author</label>
                <input
                  name="author"
                  className="form-control"
                  type="text"
                  value={this.state.author}
                  onChange={this.ambilPerubahan}
                />
              </div>

              <div className="form-group">
                <label>Page</label>
                <input
                  name="page"
                  className="form-control"
                  type="number"
                  value={this.state.page}
                  onChange={this.ambilPerubahan}
                />
              </div>
              <div className="form-group">
                <label>Language</label>
                <input
                  name="language"
                  className="form-control"
                  type="text"
                  value={this.state.language}
                  onChange={this.ambilPerubahan}
                />
              </div>
              <div className="form-group">
                <label>Publisher Id</label>
                <input
                  name="publisher_id"
                  className="form-control"
                  type="text"
                  value={this.state.publisher_id}
                  onChange={this.ambilPerubahan}
                />
              </div>
              <button type="submit" value="Submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
