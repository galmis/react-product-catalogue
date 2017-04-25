// @flow

import React from 'react';
import { Navbar, NavItem, MenuItem, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router';

const Navigator = () => {
  return (
    <Navbar collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to='/'>Sveikas-Zmogus</Link>
        </Navbar.Brand>

      </Navbar.Header>
    </Navbar>
  );
};

export default Navigator;
