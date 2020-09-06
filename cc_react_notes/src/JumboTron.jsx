import React, { Component } from "react";
import { Jumbotron, Button } from "react-bootstrap";

class JumboTronComponent extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Hello, world!</h1>
          <p>
           {this.props.children} {/* this is how to allow props to be passed in from outside of an element */}
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>
      </div>
    );
  }
}
export default JumboTronComponent;
