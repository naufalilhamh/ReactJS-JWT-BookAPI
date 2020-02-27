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

  const token = sessionStorage.getItem("Token");
  const role = sessionStorage.getItem("Role");

  if (!token) {
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand href={"/"}>Perpustakaan</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink to="/login" tag={RRNavLink}>
                Login
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  } else if (token && role === "ADMIN") {
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand href={"/"}>Perpustakaan</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink to="/daftarbuku" tag={RRNavLink}>
                List Buku
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/listuser" tag={RRNavLink}>
                List User
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/logout" tag={RRNavLink}>
                Logout
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  } else if (token && role === "USER") {
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand href={"/"}>Perpustakaan</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink to="/daftarbuku" tag={RRNavLink}>
                Pinjam Buku
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/listpinjamid" tag={RRNavLink}>
                Daftar Pinjaman Buku
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/logout" tag={RRNavLink}>
                Logout
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
};

export default Navigation;
