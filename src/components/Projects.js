import React from "react";
import { Container } from "react-bootstrap";

function Projects() {
    return (
        <Container fluid>
            <main className="mt-3">
                <h2 className="projectsHeader">
                    Projects
                </h2>

            </main>
            <section>
                <div>
                    <h3><a href="/projects/Checkmate">Checkmate</a></h3>
                    <h3><a href="/projects/MovieMind">MovieMind</a></h3>
                </div>
            </section>
        </Container>
    )
}

export default Projects