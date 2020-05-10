import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import { Link, withRouter } from "react-router-dom";
import styled from 'styled-components';
const Styles = styled.div`
  .navbar { background-color: #343a40; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #FFFFFF;
    &:hover { color: var(--mainLightGrey); }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #FFFFFF;
    &:hover { color: var(--mainLightGrey); }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;
export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand to="/about">Vinayan</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <li><Nav.Link href="/">Home</Nav.Link></li> 
          <li><Nav.Link href="/about">About</Nav.Link></li>
          <Nav.Item><Nav.Link to="/learn">Start Learning</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)