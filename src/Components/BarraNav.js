import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const BarraNav = () => {
    return (
        <Navbar expand="lg" variant="dark" bg="primary" style={{ margin: 1 + "em" }}>
          <Container>
            <Navbar.Brand href="">Mini Twitter</Navbar.Brand>
          </Container>
        </Navbar>
    );
};

export default BarraNav;
