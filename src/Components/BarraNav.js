import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const BarraNav = () => {
    return (
        <div>
            <Navbar variant="dark" bg="dark">
                <Container>
                    <Navbar.Brand>Mini Twitter</Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    );
};

export default BarraNav;
