import React, { Component } from "react";

// class Counter extends Component {
//   // constructor() {
//   //     super();
//   //     this.IncrementValue = this.IncrementValue.bind(this);
//   // }

//   state = {
//     value: this.props.counter.value,
//   };

//   formatCount() {
//     const { value } = this.state;

//     return value === 0 ? "Zero" : value;
//   }

//   getStateClasses() {
//     let classes = "badge m-2 badge-";
//     classes += this.state.value === 0 ? "warning" : "primary";
//     return classes;
//   }

//   IncrementValue = (product) => {
//     this.setState({ value: this.state.value + 1 });
//   };

//   render() {
//     return (
//       <React.Fragment>
//         <span className={this.getStateClasses()}>{this.formatCount()}</span>
//         <button
//           onClick={() => this.IncrementValue({ id: 1 })}
//           className="btn btn-secondary btn-sm"
//         >
//           Increment
//         </button>
//         <button
//           onClick={() => this.props.onDelete(this.props.counter.id)}
//           className="btn btn-danger btn-sm m-2"
//         >
//           Delete
//         </button>
      
//       </React.Fragment>
//     );
//   }
// }

// REMOVING LOCAL STATE TO ADHERE TO SINGLE SOURCE OF TRUTH:

class Counter extends Component {
   
    formatCount() {
      const { value } = this.props.counter;
      return value === 0 ? "Zero" : value;
    }
  
    getStateClasses() {
      let classes = "badge m-2 badge-";
      classes += this.props.counter.value === 0 ? "warning" : "primary";
      return classes;
    }
  
    render() {
      return (
        <div style={{display : "block"}}>
          <span className={this.getStateClasses()}>{this.formatCount()}</span>
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            Increment
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            Delete
          </button>
        
        </div>
      );
    }
  }


export default Counter;

// NOTES :

// you can use an <React.Fragment></React.Fragment> tag instead of wrapping everything in a <div></div>

// when you want to add a function/method to an event handler , you don't have access to 'this'
// in that method without binding it
// there are two ways of doing that :
// can bind this to method in the constructor -->
// constructor() {
//     super();
//     this.something = this.something.bind(this);
// }

// or you can make use of the arrow function way -->

// something = () => {
//     console.log("Binded");
// }

// You cannot pass in parameters when assigning a method to an event handler,
// have to do the following :
// someFunction = (param) => {
//     console.log(param);
// }
// ...
// onClick={() => this.someFunction(input)}
// that is how you would pass over a param.
