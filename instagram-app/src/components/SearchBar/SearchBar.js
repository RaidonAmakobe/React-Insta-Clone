import React from 'react';
import Media from 'react-media';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

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
        <Nav className="mr-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
      </Navbar>
    );
  }
}

export default SearchBar;