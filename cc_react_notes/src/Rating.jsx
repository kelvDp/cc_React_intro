import React, {Component} from "react";
import {IoIosStar, IoIosStarOutline} from "react-icons/io";

const styles = {
    starStyle : {
        color : "orange"
    }
} // can add inline css like this

// THIS IS HOW TO MAKE USE OF JUST PROPS ALONE WITHOUT STATE:

// class Rating extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>Rating : {this.props.rating}</h1>
//                 {this.props.rating >= 1 ? (
//                     <IoIosStar />
//                 ): (
//                     <IoIosStarOutline />
//                 )}
//                 {this.props.rating >= 2 ? (
//                     <IoIosStar />
//                 ): (
//                     <IoIosStarOutline />
//                 )}
//                 {this.props.rating >= 3 ? (
//                     <IoIosStar />
//                 ): (
//                     <IoIosStarOutline />
//                 )}
//                 {this.props.rating >= 4 ? (
//                     <IoIosStar />
//                 ): (
//                     <IoIosStarOutline />
//                 )}
//                 {this.props.rating >= 5 ? (
//                     <IoIosStar />
//                 ): (
//                     <IoIosStarOutline />
//                 )}
//             </div>
//         );
//     }
// }  -- the code above is the conditional rendering statements

// HOW TO ADD AND CHANGE STATE :
class Rating extends Component {
    constructor(props) {
        super(props);
        this.state = {rating : this.props.rating}
    } // -- how to add initial state

    // ^ can also simply set state outside of constructor:
    // state = {
    //     rating : this.props.rating
    // }

    handleClick(ratingValue) {
        this.setState({rating : ratingValue});
    } // -- how to change the state

    // anothr way of creating methods so as not to use bind:
    // handleClick = (ratingValue) => {...}    --> have to change method call to {() => this.handleClick(rating)}
    // in order to pass over params
    
    render() {
        return (
            <div style={styles.starStyle}> 
                {this.state.rating >= 1 ? (
                    <IoIosStar onClick={this.handleClick.bind(this,1)} />
                ): (
                    <IoIosStarOutline onClick={this.handleClick.bind(this,1)} />
                )}
                {this.state.rating >= 2 ? (
                    <IoIosStar onClick={this.handleClick.bind(this,2)} />
                ): (
                    <IoIosStarOutline onClick={this.handleClick.bind(this,2)} />
                )}
                {this.state.rating >= 3 ? (
                    <IoIosStar onClick={this.handleClick.bind(this,3)} />
                ): (
                    <IoIosStarOutline onClick={this.handleClick.bind(this,3)} />
                )}
                {this.state.rating >= 4 ? (
                    <IoIosStar onClick={this.handleClick.bind(this,4)} />
                ): (
                    <IoIosStarOutline onClick={this.handleClick.bind(this,4)} />
                )}
                {this.state.rating >= 5 ? (
                    <IoIosStar onClick={this.handleClick.bind(this,5)} />
                ): (
                    <IoIosStarOutline onClick={this.handleClick.bind(this,5)} />
                )}
                {this.props.numOfReviews}
            </div>
        );
    }
}


export default Rating;