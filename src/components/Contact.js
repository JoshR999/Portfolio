import React from "react";
import { Container, Card, Button } from "react-bootstrap";

function Contact() {
    const user = `joshrivera999w`
    const domain = `gmail.com`
    const mail = `${user}@${domain}`
    const mailto = `mailto:${mail}`

    return (
        <Container fluid>
            <Container className="d-flex">
                <Container>
                    <h2 className="contactHeader">Contact Methods</h2>
                    <Card className="cardStyle">
                        <Card.Body>
                            <Card.Title className="cardTitleStyle">
                                E-Mail
                            </Card.Title>
                            <Button id="emailButton" className="contactButton" onClick={() => (window.location.href = mailto)}>Click Me!</Button>
                        </Card.Body>
                    </Card>
                </Container>
                <Container>
                    <h2 className="contactHeader">Socials</h2>
                    <Card className="cardStyle">
                        <Card.Body>
                            <Card.Title className="cardTitleStyle">
                                Instagram
                            </Card.Title>
                            <Button className="contactButton">Click Me!</Button>
                        </Card.Body>
                    </Card>
                </Container>
            </Container>
        </Container>
    )
}

export default Contact