import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class Login extends React.Component {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  state = {
    credentials: {
      username: "",
      password: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    axiosWithAuth()
      .post("/api/login", this.state.credentials)
      .then((res) => {
        console.log("LOGIN- RES:", res.data);
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/bubble-page");
      })
      .catch((err) => console.log("LOGIN ERROR:", err));
  };
  render() {
    return (
      <div className="wrap-form">
        <h1>BubblePage</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            onChange={this.handleChange}
            value={this.state.credentials.username}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            onChange={this.handleChange}
            value={this.state.credentials.password}
          />
          <button>Log in</button>
        </form>
      </div>
    );
  }
}

export default Login;
