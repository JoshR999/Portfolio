import React from "react";
import Container from "react-bootstrap/Container"

function Splash(){
    

    return (
        <Container fluid>
            <main className="mt-5 d-flex flex-column justify-content-center align-items-center">
                <h3 className="splashWelcome">
                    Welcome to my portfolio page.
                </h3>
                <h4 className="splashText">
                    Here you can take a look at my past projects, about me, and how to contact me.
                </h4>
            </main>
            
        </Container>
    )
}

export default Splash