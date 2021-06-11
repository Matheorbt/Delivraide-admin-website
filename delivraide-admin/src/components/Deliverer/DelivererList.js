import React from 'react'

import {
    Link
} from "react-router-dom";

// React Bootstrap import
import { Card, Container, ListGroup, Button } from 'react-bootstrap';

function DelivererList() {
    return (
        <>
            <Container fluid>
                <h1>Liste des Livreurs</h1>
                <Card>
                    <Card.Header className="d-flex justify-content-between align-items-center">
                        <Card.Title>Infos Livreurs</Card.Title>
                        <Button className="ml-10" as={Link} to="/livreur/ajouter">Ajouter un livreur</Button>
                    </Card.Header>
                    <ListGroup horizontal className="d-flex justify-content-between">
                        <ListGroup.Item className="font-weight-bold border-0">Ville</ListGroup.Item>
                        <ListGroup.Item className="font-weight-bold border-0">Nom</ListGroup.Item>
                        <ListGroup.Item className="font-weight-bold border-0">Tel.</ListGroup.Item>
                        <ListGroup.Item className="font-weight-bold border-0">Actions</ListGroup.Item>
                    </ListGroup>
                    <ListGroup className="d-flex justify-content-between" horizontal>
                        <ListGroup.Item style={{ width: "25%" }} className="font-weight-normal border-0">Paris</ListGroup.Item>
                        <ListGroup.Item style={{ width: "25%" }} className="font-weight-normal border-0">Dimitri</ListGroup.Item>
                        <ListGroup.Item style={{ width: "25%" }} className="font-weight-normal border-0">0607080901</ListGroup.Item>
                        <div className="d-flex justify-content-around align-items-center">
                            <button style={{ all: "unset" }} onClick={() => console.log("Modify")}>
                                <i className="fa fa-pencil" style={{ fontSize: "32px", marginRight: "15px" }} aria-hidden="true"></i>
                            </button>
                            <button style={{ all: "unset" }} onClick={() => console.log("Delete")}>
                                <i className="fa fa-times-circle" style={{ fontSize: "32px", marginRight: "15px" }} aria-hidden="true"></i>
                            </button>
                        </div>
                    </ListGroup>
                </Card>
            </Container>
        </>
    )
}

export default DelivererList
