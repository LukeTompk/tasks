import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <h1>Header One Text</h1>
            <img src="./media/ageraRsFe.jpeg" alt="Agera RS FE"></img>
            <ul>
                <li>First item</li>
                <li>Second item</li>
                <li>Third item</li>
            </ul>
            <div>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </div>
            <div>
                <Container>
                    <Row>
                        <Col>
                            Column One
                            <div id="redRec"></div>
                        </Col>
                        <Col>
                            Column Two
                            <div id="redRec"></div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <h1>Luke Tompkins</h1>
            <h2>Hello World</h2>
        </div>
    );
}

export default App;
