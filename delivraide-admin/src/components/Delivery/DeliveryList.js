import React from 'react'

import {
    Link
} from "react-router-dom";

// React Bootstrap import
import { Card, Container, ListGroup, Button } from 'react-bootstrap';

function DeliveryList() {
    return (
        <>
            <Container fluid>
                <h1>Liste des livraison en attente</h1>
                <Card>
                    <Card.Header className="d-flex justify-content-between align-items-center">
                        <Card.Title>News</Card.Title>
                        <Button className="ml-10" as={Link} to="/livraison/ajouter">Ajouter une livraison</Button>
                    </Card.Header>
                    <ListGroup horizontal className="d-flex justify-content-between">
                        <ListGroup.Item className="font-weight-bold border-0">Ville</ListGroup.Item>
                        <ListGroup.Item className="font-weight-bold border-0">Code postal</ListGroup.Item>
                        <ListGroup.Item className="font-weight-bold border-0">Adresse</ListGroup.Item>
                        <ListGroup.Item className="font-weight-bold border-0">Numéro de tel.</ListGroup.Item>
                        <ListGroup.Item className="font-weight-bold border-0">Prénom</ListGroup.Item>
                        <ListGroup.Item className="font-weight-bold border-0">Nom</ListGroup.Item>
                        <ListGroup.Item className="font-weight-bold border-0">Email</ListGroup.Item>
                        <ListGroup.Item className="font-weight-bold border-0">Actions</ListGroup.Item>
                    </ListGroup>
                    <ListGroup className="d-flex justify-content-between" horizontal>
                        <ListGroup.Item style={{ width: "25%" }} className="font-weight-normal border-0">Infos livreurs Montpellier</ListGroup.Item>
                        <ListGroup.Item style={{ width: "35%" }} className="font-weight-normal border-0">08/08/21</ListGroup.Item>
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
                <hr />
                <h1>Liste des livraison passées</h1>
                <Card>
                    <Card.Header className="d-flex justify-content-between align-items-center">
                        <Card.Title>News</Card.Title>
                        <Button className="ml-10" as={Link} to="/news/ajouter">Ajouter une news</Button>
                    </Card.Header>
                    <ListGroup horizontal className="d-flex justify-content-between">
                        <ListGroup.Item className="font-weight-bold border-0">Titre</ListGroup.Item>
                        <ListGroup.Item className="font-weight-bold border-0">Date de publication</ListGroup.Item>
                        <ListGroup.Item className="font-weight-bold border-0">Actions</ListGroup.Item>
                    </ListGroup>
                    <ListGroup className="d-flex justify-content-between" horizontal>
                        <ListGroup.Item style={{ width: "25%" }} className="font-weight-normal border-0">Infos livreurs Montpellier</ListGroup.Item>
                        <ListGroup.Item style={{ width: "35%" }} className="font-weight-normal border-0">08/08/21</ListGroup.Item>
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

export default DeliveryList