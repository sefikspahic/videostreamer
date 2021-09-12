import React from "react";
import { Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar expand="lg" variant="light" bg="light">
      <Container>
        <Navbar.Brand href="#">Videostreamer</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
