import React, { Component } from "react";
import axios from "axios";

export default class UpdateRole extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        name: "",
        username: "",
        email: "",
        roles: []
      }
    };
  }

  componentDidMount = async () => {
    const id = this.props.match.params.id;
    const res = await axios.get("http://localhost:6767/users/" + id);
    this.setState(res.data.data.roles[0]);
  };

  //   ambilPerubahan = e => {
  //     const target = e.target;
  //     const name = target.name;
  //     const value = target.value;
  //     this.setState({ [name]: value });
  //   };

  //   ambilupdate = async e => {
  //     const id = this.props.match.params.id;

  //     e.preventDefault();

  //     await axios.put("http://localhost:6767/books/" + id, this.state);
  //     alert("Update Buku Berhasil");
  //     this.props.history.push("/daftarbuku");
  //   };

  render() {
    return (
      <div className="container">
        <div className="cardregis">
          <form onSubmit={this.ambilupdate}>
            <div className="container mt-5">
              <div className="form-group">
                <label className="mt-2">Role Sebelumnya</label>
                <input
                  name="nama"
                  type="text"
                  className="form-control"
                  value={this.state.name}
                  disabled
                  //onChange={this.ambilPerubahan}
                />
              </div>
              {(() => {
                if (this.state.name === "ADMIN") {
                  return (
                    <button
                      type="submit"
                      value="Submit"
                      className="btn btn-primary mb-2"
                    >
                      Cabut Admin
                    </button>
                  );
                } else {
                  return (
                    <button
                      type="submit"
                      value="Submit"
                      className="btn btn-primary mb-2"
                    >
                      Jadikan Admin
                    </button>
                  );
                }
              })()}
            </div>
          </form>
        </div>
      </div>
    );
  }
}
