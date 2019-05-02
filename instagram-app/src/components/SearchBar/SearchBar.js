import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

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
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/"><img src = "./images/instagram2.png" style = {{width: 30}}/></NavbarBrand>
          <NavbarBrand href="/"><img src = "./images/instagram.png" style = {{width: 130, paddingTop: 5, paddingLeft: 30}}/></NavbarBrand>
          <NavbarBrand href = '/' center></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/"><img src = "./images/navigator.svg" style = {{width: 30}}/></NavLink>
              </NavItem>
              <NavItem style = {{paddingLeft: 15}}>
                <NavLink href="/"><img src = "./images/heart-like.svg" style = {{width: 30}}/></NavLink>
              </NavItem>
              <UncontrolledDropdown style = {{paddingLeft: 15}} nav inNavbar>
                <DropdownToggle nav caret >
                  <img src = "./images/user.svg" style = {{width: 30,}}/>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                  <img src = "./images/upload.svg" />
                  </DropdownItem>
                  <DropdownItem>
                  <img src = "./images/navigation-1.svg" />
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default SearchBar;