import React from 'react';
import Media from 'react-media';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
        <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">
            <img
                src="./images/instagram2.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
            />
            {<img style = {{width: 100, marginLeft: 20}} src = "./images/instagram.png" />}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
          <Form inline>
            <Form.Control type="text" placeholder="Search" className = "mr-sm-2"/>
          </Form>
        <Nav>
          <Nav.Link href="#features">
          
          </Nav.Link>
          <Nav.Link href="#pricing">
          
          </Nav.Link>
          <Nav.Link href="#pricing">

          </Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default SearchBar;