import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Splash(){
    

    return (
        <Container fluid>
            <h2 className="splashHeader text-center mt-5">
                Welcome to my Portfolio Page!
            </h2>
            <Row>
                <Col>
                    <h2 className="splashBlank">
                        |
                    </h2>
                </Col>
                <Col>
                    <h2 className="splashBlank">
                        |
                    </h2>
                </Col>
                <Col>
                    <h2 className="splashBlank">
                        |
                    </h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2 className="splashBlank">
                        |
                    </h2>
                </Col>
                <Col md="auto">
                    <h3 className="splashText">
                        Here you can find my past projects, about me, and my contact links!
                    </h3>
                </Col>
                <Col>
                    <h2 className="splashBlank">
                        |
                    </h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2 className="splashBlank">
                        |
                    </h2>
                </Col>
                <Col>
                    <h2 className="splashBlank">
                        |
                    </h2>
                </Col>
                <Col>
                    <h2 className="splashBlank">
                        |
                    </h2>
                </Col>
            </Row>
        </Container>
    )
}

export default Splash