import React from "react";
import { Container, Card, Button, Col, Row } from "react-bootstrap";

function Contact() {
    const user = `joshrivera999w`
    const domain = `gmail.com`
    const mail = `${user}@${domain}`
    const mailto = `mailto:${mail}`
    const gitLink = `https://github.com/SquidHyperfixation`
    const linkedIn = `https://www.linkedin.com/in/josh-rivera-51a171282/`

    return (
        <Container fluid>
            <Row>
                <Col>
                    <h2 className="contactHeader">Contact Methods</h2>
                    <Container>
                        <Card className="cardStyle">
                            <Card.Body>
                                <Card.Title className="cardTitleStyle">
                                    E-Mail
                                </Card.Title>
                                <Button id="emailButton" className="contactButton" onClick={() => (window.location.href = mailto)}>Click Me!</Button>
                            </Card.Body>
                        </Card>
                    </Container>
                </Col>
                <Col>
                    <h2 className="contactHeader">Socials</h2>
                    <Container>
                        <Card className="cardStyle">
                            <Card.Body>
                                <Card.Title className="cardTitleStyle">
                                    GitHub
                                </Card.Title>
                                <Button className="contactButton" onClick={() => (window.location.href = gitLink)}>Click Me!</Button>
                            </Card.Body>
                        </Card>
                    </Container>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Container>
                        <Card className="cardStyle">
                            <Card.Body>
                                <Card.Title className="cardTitleStyle">
                                    LinkedIn
                                </Card.Title>
                                <Button className="contactButton" onClick={() => (window.location.href = linkedIn)}>Click Me!</Button>
                            </Card.Body>
                        </Card>
                    </Container>
                </Col>
                <Col>
                    <Container>
                        <Card className="cardStyle">
                            <Card.Body>
                                <Card.Title className="cardTitleStyle">
                                    TBA
                                </Card.Title>
                                <Button className="contactButton" onClick={() => (window.location.href = `squid`)}>
                                    Click Me!
                                </Button>
                            </Card.Body>
                        </Card>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact