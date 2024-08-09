import React from "react";
import { Container, ListGroup } from "react-bootstrap";

function About() {
    return (
        <Container fluid className="m-2">
            <Container fluid>
                <h1 className="aboutHeader">
                    About me
                </h1>
                <p className="aboutText">
                    Hello, my name is Joshua Rivera, and I go by Josh. I'm a newly certified front-end & back-end developer with most of my interest in UX/UI and design. 
                </p>
                <p className="aboutText">
                    I love learning new ways to be creative since my hands don't seem to like drawing on paper, and I'm always looking for new ways to spice things up.
                </p>
                <p className="aboutText">
                    I'm also a power head b-boy who competes (sometimes), as well as a mostly casual gamer.
                </p>
            </Container>
            <Container fluid>
                <h4 className="aboutHeader">
                    Languages I have experience with and a personal rating on my knowledge:
                </h4>
                <ListGroup horizontal className="d-flex justify-content-center mt-4">
                    <ListGroup.Item className="groupedItem">
                        <span className="aboutHeader">HTML</span>
                        <li className="aboutText">
                            4/5
                        </li>
                    </ListGroup.Item>
                    <ListGroup.Item className="groupedItem">
                        <span className="aboutHeader">CSS</span>
                        <li className="aboutText">
                            4/5
                        </li>
                    </ListGroup.Item>
                    <ListGroup.Item className="groupedItem">
                        <span className="aboutHeader">JavaScript</span>
                        <li className="aboutText">
                            3/5
                        </li>
                    </ListGroup.Item>
                    <ListGroup.Item className="groupedItem">
                        <span className="aboutHeader">Python</span>
                        <li className="aboutText">
                            3/5
                        </li>
                    </ListGroup.Item>
                    <ListGroup.Item className="groupedItem">
                        <span className="aboutHeader">TypeScript</span>
                        <li className="aboutText">
                            2/5
                        </li>
                    </ListGroup.Item>
                </ListGroup>
            </Container>
        </Container>
    )
}

export default About