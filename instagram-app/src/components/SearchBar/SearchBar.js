import React from 'react';
import Media from 'react-media';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import Navbar from 'react-bootstrap/Navbar'

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className = "thisone">
        
        <Media query = "(max-width: 400px)">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/"><img src = "./images/instagram.png" style = {{width: 130, paddingTop: 5, paddingLeft: 30}}/></NavbarBrand>
          <Col xs="9">
          </Col>
        </Navbar>
        </Media>

        <Media query = "(min-width: 401px, max-width: 960px)">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/"><img src = "./images/instagram2.png" style = {{width: 30}}/></NavbarBrand>
          <NavbarBrand href="/"><img src = "./images/instagram.png" style = {{width: 130, paddingTop: 5, paddingLeft: 30}}/></NavbarBrand>
          <Col xs="9">
          <NavbarBrand>
            <InputGroup>
                <Input placeholder = "Search" />
            </InputGroup>
          </NavbarBrand>
          </Col>

          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/"><img src = "./images/navigator.svg" style = {{width: 25}}/></NavLink>
              </NavItem>
              <NavItem style = {{paddingLeft: 15}}>
                <NavLink href="/"><img src = "./images/heart-like.svg" style = {{width: 25}}/></NavLink>
              </NavItem>
              <UncontrolledDropdown style = {{paddingLeft: 15}} nav inNavbar>
                <DropdownToggle nav caret >
                  <img src = "./images/user.svg" style = {{width: 25}}/>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                  Profile
                  </DropdownItem>
                  <DropdownItem>
                  Messages
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
        </Media>

        <Media query = "(min-width: 961px)">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/"><img src = "./images/instagram2.png" style = {{width: 30}}/></NavbarBrand>
          <NavbarBrand href="/"><img src = "./images/instagram.png" style = {{width: 130, paddingTop: 5, paddingLeft: 30}}/></NavbarBrand>
          <Col xs="9">
          <NavbarBrand>
            <InputGroup>
                <Input placeholder = "Search" />
            </InputGroup>
          </NavbarBrand>
          </Col>

          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/"><img src = "./images/navigator.svg" style = {{width: 25}}/></NavLink>
              </NavItem>
              <NavItem style = {{paddingLeft: 15}}>
                <NavLink href="/"><img src = "./images/heart-like.svg" style = {{width: 25}}/></NavLink>
              </NavItem>
              <UncontrolledDropdown style = {{paddingLeft: 15}} nav inNavbar>
                <DropdownToggle nav caret >
                  <img src = "./images/user.svg" style = {{width: 25}}/>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                  Profile
                  </DropdownItem>
                  <DropdownItem>
                  Messages
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
        </Media>
      </div>
    );
  }
}

export default SearchBar;