import React from "react";
import { Container, Button } from "react-bootstrap";

export default function Error404() {
    return(
        <Container fluid>
            <Container className="d-flex justify-content-center">
                <h2 className="text-danger">
                    Error 404: Sorry this page doesn't exist!
                </h2>
            </Container>
            <Container>
                <Button variant="secondary" className="errorHomeBtn" onClick={() => (window.location.href = '/')}>
                    Return to Home Page
                </Button>
            </Container>
        </Container>
    )
}