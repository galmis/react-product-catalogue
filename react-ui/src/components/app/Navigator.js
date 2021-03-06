// @flow

import React from 'react';
import { Navbar, NavItem, MenuItem, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router';
import { push } from 'react-router-redux';

const Navigator = (props: Object) => {

  const _onClick = (to: string) => {
    props.dispatch(push(to));
  };

  return (
    <Navbar collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to='/'>buksveikas.lt</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>

      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="/" onClick={() => _onClick('/')}>Produktai</NavItem>
          <NavItem eventKey={2} href="/apiemus" onClick={() => _onClick('/apiemus')}>Apie Mus</NavItem>
          <NavItem eventKey={2} href="/blogas/psl/1" onClick={() => _onClick('/blogas/psl/1')}>Blogas</NavItem>
        </Nav>
      </Navbar.Collapse>

    </Navbar>
  );
};

export default Navigator;
