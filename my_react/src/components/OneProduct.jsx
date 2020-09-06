import React, { Component } from "react";
import Rating from "./Rating";
import {Media} from "react-bootstrap";

class Product extends Component {
 
  render() {
    return (
      <Media>
        <img
          width={64}
          height={64}
          className="mr-3"
          src={this.props.data.imageUrl}
          alt="Random cats"
        />
        <Media.Body>
          <h5>{this.props.data.productName}</h5>
          {this.props.data.releasedDate}
          <Rating rating={this.props.data.rating} numOfReviews={this.props.data.numOfReviews} />
          <p>{this.props.data.description}</p>
        </Media.Body>
      </Media>
    );
  }
}

export default Product;
