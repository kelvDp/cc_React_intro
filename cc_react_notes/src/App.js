import React, { Component } from "react";
// import Products from "./Products";
// import JumboTronComponent from "./JumboTron";
// import UserForm from "./UserForm";
import Github from "./Github";
// import {Button} from "react-bootstrap";
// import Rating from "./Rating";
// import Product from './OneProduct';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Nav, Navbar, NavbarBrand, NavLink} from "react-bootstrap";
import GitUser from "./GitHubUser";


// class App extends Component {
//   render() {
//     return (
//       <div>
//         <h1>My first React App</h1>
//         <Products />
//       </div>
//     );
//   }
// }

// class App extends Component {
//   formatName(user) {
//     return user.firstName + " " + user.lastName;
//   }

//   render() {
//     const user = {
//       firstName : "Greg",
//       lastName : "Lim"
//     };
//     const isValid = true;
//     return(
//       <div>
//         {/* <h1>Hello, {this.formatName(user)}</h1>
//         <Products />
//         <Button disabled={!isValid}>Default</Button> */}
//         <Rating rating="1" />
//         <Rating rating="2" />
//         <Rating rating="3" />
//         <Rating rating="4" />
//         <Rating rating="5" />
//       </div>
//     );
//   }
// }

// class App extends Component {
//   formatName(user) {
//     return user.firstName + " " + user.lastName;
//   }

//   render() {
//     return (
//       <div className="App">
//         {/* <Products /> */}
//         {/* <JumboTronComponent>
//           This is a long sentence, And i want to insert content into the
//           jumbotron from the outside.
//         </JumboTronComponent>
//         <UserForm /> */}
//         <Github />
//       </div>
//     );
//   }
// }

// HOW TO MAKE USE OF ROUTES:
class App extends Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar bg="light" expand="lg">
            <NavbarBrand href="#home">
              React-Bootstrap
            </NavbarBrand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/github">Github</NavLink>
                <NavLink href="/random">Random</NavLink>
                </Nav>
                </Navbar.Collapse>
                </Navbar>

          <Switch>
          <Route path="/github/user/:login/:id" component={GitUser} />
            <Route path="/github" component={Github} />
            <Route exact path="/" component={Home} />
            <Route path="/random" component={Random} />
            <Route path="/*" component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

class Random extends Component {
  render() {
    return (
      <h1>This is your random route</h1>
    );
  }
}

class Home extends Component {
  render() {
    return <div>Home</div>;
  }
}

class NotFound extends Component {
  render() {
    return <div>Not found</div>;
  }
}

// ----------------------------------------------------------------

// function formatName(user) {
//   return user.fname + " " + user.lname;
// }

// const user = {
//   fname : "Kelvin",
//   lname : "Delport"
// }

// const isValid = true;

// function App() {
//   return (
//     <div>
//       <h1>Hello, {formatName(user)}</h1>
//       <Products />
//       <Button disabled={!isValid}>Default</Button>
//     </div>
//   );
// }

export default App;
