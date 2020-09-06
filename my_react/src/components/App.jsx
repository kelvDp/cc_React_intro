import React, { Component } from "react";
import Github from "./Github";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Nav, Navbar, NavbarBrand, NavLink } from "react-bootstrap";
import GitUser from "./GitHubUser";

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
            <NavbarBrand href="#home">React-Bootstrap</NavbarBrand>
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
    return <h1>This is your random route</h1>;
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

export default App;
