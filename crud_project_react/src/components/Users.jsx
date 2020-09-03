import React, { Component } from "react";
import * as firebase from "firebase";
import { Table, Button, Modal} from "react-bootstrap";
import {Link} from "react-router-dom";

class User extends Component {

  constructor() {
    super();

    this.state = {
      users: [],
      showDeleteDialog : false,
      selectedUser : {}
    };

    this.add = this.add.bind(this);
    this.closeDeleteDialog = this.closeDeleteDialog.bind(this);
    this.delete = this.delete.bind(this);
  }

  add() {
      this.props.history.push("/add");
  }

  openDeleteDialog(user) {
      this.setState({
          showDeleteDialog : true,
          selectedUser : user
      });
  }

  closeDeleteDialog() {
      this.setState({
          showDeleteDialog : false,
          selectedUser : {}
      });
  }

  delete() {
      firebase.database().ref("/"+this.state.selectedUser.key).remove()
      .then(x => {
          console.log("Success");
          this.closeDeleteDialog();
      })
      .catch(error => {
            alert("Could not delete this user.");
            console.log(error);
      });
  }

  componentDidMount() {
    firebase.database().ref("/")
      .on("value",(snapshot) => {
         console.log(snapshot.val());

        let returnArr = [];

        snapshot.forEach((dataItem) => {
          let user = dataItem.val();
          user["key"] = dataItem.key;
          returnArr.push(user);
        });

        this.setState({
          users: returnArr,
        });

      });
  }

  render() {
    const listUsers = this.state.users.map((user) => (
      <tr key={user.key}>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td><Link to={`/edit/${user.key}`}>Edit</Link> </td>
        <td><Button onClick={this.openDeleteDialog.bind(this,user)}>Remove</Button></td>
      </tr>
    ));
    return (
      <div>
      <Button variant="primary" onClick={this.add}>ADD</Button>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{listUsers}</tbody>
        </Table>

        <Modal show={this.state.showDeleteDialog} onHide={this.closeDeleteDialog}>
            <Modal.Header closeButton>
                <Modal.Title>Delete User</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Are you sure you want to delete {this.state.selectedUser.username} ?</p>
                <hr/>
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={this.delete}>Delete</Button>
                <Button onClick={this.closeDeleteDialog}>Close</Button>
            </Modal.Footer>
        </Modal>

      </div>
    );
  }
}

export default User;
