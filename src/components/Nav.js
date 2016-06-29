import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export default () => {
  return (
    <Navbar inverse>
      <Navbar.Header>
        <Navbar.Brand>
          Super Sweet Chat App
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavDropdown eventKey={3} title="Users" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>User 1</MenuItem>
            <MenuItem eventKey={3.2}>User 2</MenuItem>
            <MenuItem eventKey={3.3}>User 3</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>My Profile</MenuItem>
          </NavDropdown>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">Home</NavItem>
          <NavItem eventKey={2} href="#">About</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
