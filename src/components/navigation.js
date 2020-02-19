import React, { useState } from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href={"/"}>Kota Bandung</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink to="/home" tag={RRNavLink}>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/profile" tag={RRNavLink}>
              Profile
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/about" tag={RRNavLink}>
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/handling" tag={RRNavLink}>
              Handling
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/multihandling" tag={RRNavLink}>
              Multi Handling
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/validasi" tag={RRNavLink}>
              Validasi Form
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/challenge-validasi" tag={RRNavLink}>
              Challenge Validasi Form
            </NavLink>
          </NavItem>
          {/* <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Options
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Option 1</DropdownItem>
              <DropdownItem>Option 2</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Reset</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown> */}
        </Nav>
      </Collapse>
    </Navbar>
  );
};
export default Navigation;
