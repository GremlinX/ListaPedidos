import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Cardapio from "./cardapido";

function AppAula02() {
    return (
        <app-aula-02>
            {/* <CustomNavbar/> */}
            <Container fluid>
                <div className="px-4 my-5 text-center">
                    <h1 className="display-5 fw-bold">CARDÁPIO DO GREMLIN</h1>
                </div>
                <Cardapio/>
            </Container>
        </app-aula-02>
    );
}

export default AppAula02;