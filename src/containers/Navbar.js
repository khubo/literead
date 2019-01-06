import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import styled from 'styled-components';

const NavBar = () => {
  const [isCollapsed, toggleCollpased] = useState(true);

  const toggleNavbar = () => {
    toggleCollpased(isCollapsed => !isCollapsed);
  };

  return (
    <Wrapper>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">
          <H1> Lite Reads </H1>
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!isCollapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavButton href="#">My Books</NavButton>
            </NavItem>
            <NavItem>
              <NavButton href="#">WishList</NavButton>
            </NavItem>
            <NavItem>
              <NavButton href="#"> Trending</NavButton>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Wrapper>
  );
};

export default NavBar;

const Wrapper = styled.div`
  background-color: #dcdac6;
  width: 100%;
  box-shadow: 0 0px 10px;
`;

const H1 = styled.h1`
  color: #774e3d;
  font-family: 'Happy Monkey';
  float: left;
`;

const NavButton = styled(NavLink)`
  color: #918f85;
  &:hover {
    font-weight: 700;
  }
  padding: 20px;
`;
