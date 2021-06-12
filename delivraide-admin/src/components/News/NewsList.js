import React, { useState } from 'react'

import {
    Link
} from "react-router-dom";

// React Bootstrap import
import { Card, Container, ListGroup, Button, Modal, Form } from 'react-bootstrap';

function NewsList() {
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const [showModification, setShowModification] = useState(false);
    const [showInspect, setShowInspect] = useState(false);

    // React hook for delete pop-up
    const handleCloseDelete = () => setShowDeleteConfirmation(false);
    const handleShowDelete = () => setShowDeleteConfirmation(true);

    // React hook for modification pop-up
    const handleCloseModification = () => setShowModification(false);
    const handleShowModification = () => setShowModification(true);

    // React hook for inspect pop-up
    const handleCloseInspect = () => setShowInspect(false);
    const handleShowInspect = () => setShowInspect(true);
    return (
        <>
            <Container fluid>
                <h1>Liste des news</h1>
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
                            <button style={{ all: "unset" }} onClick={handleShowModification}>
                                <i className="fa fa-pencil" style={{ fontSize: "32px", marginRight: "15px" }} aria-hidden="true"></i>
                            </button>
                            <button style={{ all: "unset" }} onClick={handleShowDelete}>
                                <i className="fa fa-times-circle" style={{ fontSize: "32px", marginRight: "15px" }} aria-hidden="true"></i>
                            </button>
                            <button style={{ all: "unset" }} onClick={handleShowInspect}>
                                <i style={{ fontSize: "32px", marginRight: "15px" }} className="fa fa-search" aria-hidden="true"></i>
                            </button>
                        </div>
                    </ListGroup>
                </Card>
            </Container>
            {/* Pop-up confirm delete delivery */}
            <Modal show={showDeleteConfirmation} onHide={handleCloseDelete} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Suppression</Modal.Title>
                </Modal.Header>
                <Modal.Body>Es-tu sûr de vouloir supprimer cette news ?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseDelete}>
                        Annuler
                    </Button>
                    <Button variant="primary" onClick={handleCloseDelete}>
                        Confirmer
                    </Button>
                </Modal.Footer>
            </Modal>
            {/* Pop-up modification delivery */}
            <Modal show={showModification} onHide={handleCloseModification} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Modification</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicTitle">
                            <Form.Label><h3>Titre</h3></Form.Label>
                            <Form.Control size="lg" type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicTitle">
                            <Form.Label><h3>Contenu</h3></Form.Label>
                            <Form.Control as="textarea" type="text" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Enregistrer
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModification}>
                        Annuler
                    </Button>
                    <Button variant="primary" onClick={handleCloseModification}>
                        Confirmer
                    </Button>
                </Modal.Footer>
            </Modal>
            {/* Pop-up inspect delivery */}
            <Modal show={showInspect} onHide={handleCloseInspect} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Détails</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ListGroup className="d-flex justify-content-between">
                        <ListGroup.Item className="font-weight-bold border-0">Titre :<span className="font-weight-bold"><br />Infos livreurs Montpellier</span></ListGroup.Item>
                    </ListGroup>
                    <ListGroup className="d-flex justify-content-between">
                        <ListGroup.Item className="font-weight-bold border-0">Contenu :<span className="font-weight-light"><br />Je suis homosexuel depuis ma tendre enfance</span></ListGroup.Item>
                    </ListGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseInspect}>
                        Fermer
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default NewsList
