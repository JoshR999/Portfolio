import React from "react";
import { Navbar, Dropdown, Container } from "react-bootstrap";
import {HandleDrop as handleDropdown} from "./HandleDrop";


function Navigate(){
    const [showMenu, toggleMenu] = handleDropdown()

    return (
        <Container fluid className="navigationBar">
            <Navbar className="d-flex justify-content-between">
                <Navbar.Brand href="/" className="brandName fs-2">Joshua Rivera</Navbar.Brand>
                <Dropdown onToggle={toggleMenu} show={showMenu} align="end">
                    <Dropdown.Toggle as="button" onClick={toggleMenu} className={`dropButton ${showMenu ? 'active' : ''}`}>
                        
                    </Dropdown.Toggle>
                    <Dropdown.Menu className={`dropMenu ${showMenu ? 'show' : ''}`}>
                        <Dropdown.Item href="/">
                            Home
                        </Dropdown.Item>
                        <Dropdown.Item href="/projects">
                            Projects
                        </Dropdown.Item>
                        <Dropdown.Item href="/about">
                            About
                        </Dropdown.Item>
                        <Dropdown.Item href="/contact">
                            Contact
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Navbar>
        </Container>
    )
}

export default Navigate