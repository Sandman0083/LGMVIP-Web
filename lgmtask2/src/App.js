import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import "./components/App.css"

import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    // Set initial state
    this.state = { users_data: [], loading: true };

    this.updateState = this.updateState.bind(this);
  }

  updateState() {
    // document.getElementById("main").style.display='flex';
    const link = "https://reqres.in/api/users?page=1";
    fetch(link)
      .then((response) => response.json())
      .then((users) => {
        this.setState({ users_data: users.data, loading: false });
        console.log(users.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <>
        <Header />
        <button onClick={this.updateState}>Get Users</button>

        <Card loading={this.state.loading} users={this.state.users_data} />
        <Footer />
      </>
    );
  }
}

export default App;
