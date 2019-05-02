import React from 'react';
import Media from 'react-media';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      
        <Navbar sticky = "top" bg="light" variant="light">
     
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
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>  
          </Nav>
          <Form inline class = "center">
            <Form.Control type="text" placeholder="Search" className= "text-center" />
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