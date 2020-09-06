import React, {Component} from "react";
import {Button} from "react-bootstrap";

class GitHubUser extends Component {

    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.history.push("/github"); // this reroutes to link specified here
    }
// to use params in a prop , specify like below :
    render() {
        return (
            <div>
                <h1>User login : {this.props.match.params.login}</h1>
                <h2>Id : {this.props.match.params.id}</h2>
                <Button variant="primary" onClick={this.handleClick}>
                    Go to github users
                </Button>
            </div>
        );
    }
}

export default GitHubUser;