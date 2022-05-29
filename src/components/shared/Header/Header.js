import React from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <Nav variant="tabs" sticky="top" fixed="top" defaultActiveKey="/">
            <Nav.Item>
                <LinkContainer to='/'>
                    <Nav.Link>Home</Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <Nav.Item>
                <LinkContainer to='/reviews'>
                    <Nav.Link>Reviews</Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <Nav.Item>
                <LinkContainer to='/blog'>
                    <Nav.Link>Blogs</Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <Nav.Item>
                <LinkContainer to='/about-us'>
                    <Nav.Link>About</Nav.Link>
                </LinkContainer>
            </Nav.Item>
        </Nav>
    );
};

export default Header;