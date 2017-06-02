// @flow

import React from 'react';
import { Navbar, NavItem, MenuItem, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router';

const Navigator = () => {
  return (
    <Navbar collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to='/'>sveikas-zmogus.lt</Link>
        </Navbar.Brand>
      </Navbar.Header>

      <Nav>
        <NavItem eventKey={1} href="#">Produktai</NavItem>
        <NavItem eventKey={1} href="#">Apie Mus</NavItem>
      </Nav>

    </Navbar>
  );
};

export default Navigator;
