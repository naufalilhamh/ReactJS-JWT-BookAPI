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
      <NavbarBrand href={"/"}>Perpustakaan</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink to="/daftarbuku" tag={RRNavLink}>
              Daftar Buku
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/tambahbuku" tag={RRNavLink}>
              Tambah Buku
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/caribuku" tag={RRNavLink}>
              Cari Buku
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/updatebuku" tag={RRNavLink}>
              Update Buku
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
