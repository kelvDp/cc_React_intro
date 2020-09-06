import React, { Component } from "react";
import axios from "axios";
import ReactLoading from "react-loading";
import { Media, Form, FormGroup, FormControl, Button } from "react-bootstrap";
import {Link} from "react-router-dom";

class Github extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      searchTerm: "",
      isLoading: false,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      isLoading: true,
    });
    this.getGitHubData(this.state.searchTerm);
  }

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  }

  getGitHubData(_searchTerm) {
    axios
      .get("https://api.github.com/search/users?q=" + _searchTerm)
      .then((res) => {
        this.setState({
          isLoading: false,
          data: res.data.items,
        });
        console.log(res.data.items);
      });
  }

  render() {
    const listUsers = this.state.data.map((user) => (
      <Media key={user.id}>
        <Link to={`/github/user/${user.login}/${user.id}`}>
          <img width={64} height={64} src={user.avatar_url} alt="Generic" />
        </Link>
        <Media.Body>
          <h5>Login : {user.login}</h5>
          <p>Id: {user.id}</p>
        </Media.Body>
      </Media>
    ));

    return (
      <div>
        <Form inline onSubmit={this.handleSubmit}>
          <FormGroup controlId="formInlineName">
            <FormControl
              type="text"
              value={this.state.searchTerm}
              placeholder="Enter Search Term"
              onChange={this.handleChange}
            />
          </FormGroup>{" "}
          <Button type="submit">Search</Button>
        </Form>
        <h3>Github Users results</h3>
        {this.state.isLoading && (
          <ReactLoading type="spinningBubbles" color="#444" />
        )}
        {listUsers}
      </div>
    );
  }
}

export default Github;
