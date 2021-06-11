import React, { useState } from 'react'

import {
    Link
} from "react-router-dom";

// React Bootstrap import
import { Card, Container, ListGroup, Button, Modal, Form } from 'react-bootstrap';

function DeliveryList() {
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

    function getCurrentDay() {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;
        return (today);
    }
    return (
        <>
            <Container fluid>
                <h1>Liste des livraison confirmées en attente</h1>
                <Card>
                    <Card.Header className="d-flex justify-content-between align-items-center">
                        <Card.Title>News</Card.Title>
                        <Button className="ml-10" as={Link} to="/livraison/ajouter">Ajouter une livraison</Button>
                    </Card.Header>
                    <ListGroup horizontal className="d-flex justify-content-between">
                        <ListGroup.Item className="font-weight-bold border-0">Ville</ListGroup.Item>
                        <ListGroup.Item className="font-weight-bold border-0">Code postal</ListGroup.Item>
                        <ListGroup.Item className="font-weight-bold border-0">Numéro de tel.</ListGroup.Item>
                        <ListGroup.Item className="font-weight-bold border-0">Prénom</ListGroup.Item>
                        <ListGroup.Item className="font-weight-bold border-0">Actions</ListGroup.Item>
                    </ListGroup>
                    <ListGroup className="d-flex justify-content-between" horizontal>
                        <ListGroup.Item style={{ width: "25%" }} className="font-weight-normal border-0">Paris</ListGroup.Item>
                        <ListGroup.Item style={{ width: "25%" }} className="font-weight-normal border-0">92000</ListGroup.Item>
                        <ListGroup.Item style={{ width: "25%" }} className="font-weight-normal border-0">0634758154</ListGroup.Item>
                        <ListGroup.Item style={{ width: "25%" }} className="font-weight-normal border-0">Timothé</ListGroup.Item>
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
                <hr />
                <h1>Liste des livraison en attente de confirmation</h1>
                <Card>
                    <Card.Header className="d-flex justify-content-between align-items-center">
                        <Card.Title>News</Card.Title>
                        <Button className="ml-10" as={Link} to="/livraison/ajouter">Ajouter une livraison</Button>
                    </Card.Header>
                    <ListGroup horizontal className="d-flex justify-content-between">
                        <ListGroup.Item className="font-weight-bold border-0">Ville</ListGroup.Item>
                        <ListGroup.Item className="font-weight-bold border-0">Code postal</ListGroup.Item>
                        <ListGroup.Item className="font-weight-bold border-0">Numéro de tel.</ListGroup.Item>
                        <ListGroup.Item className="font-weight-bold border-0">Prénom</ListGroup.Item>
                        <ListGroup.Item className="font-weight-bold border-0">Actions</ListGroup.Item>
                    </ListGroup>
                    <ListGroup className="d-flex justify-content-between" horizontal>
                        <ListGroup.Item style={{ width: "25%" }} className="font-weight-normal border-0">Paris</ListGroup.Item>
                        <ListGroup.Item style={{ width: "25%" }} className="font-weight-normal border-0">92000</ListGroup.Item>
                        <ListGroup.Item style={{ width: "25%" }} className="font-weight-normal border-0">0634758154</ListGroup.Item>
                        <ListGroup.Item style={{ width: "25%" }} className="font-weight-normal border-0">Timothé</ListGroup.Item>
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
                <hr />
                <h1>Liste des livraison passées</h1>
                <Card>
                    <Card.Header className="d-flex justify-content-between align-items-center">
                        <Card.Title>Livraisons avant le {getCurrentDay()}</Card.Title>
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
                <Modal.Body>Es-tu sûr de vouloir supprimer cette livraison ?</Modal.Body>
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
                            <Form.Label><h3>Nom</h3></Form.Label>
                            <Form.Control size="lg" type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicTitle">
                            <Form.Label><h3>Prénom</h3></Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicTitle">
                            <Form.Label><h3>Ville</h3></Form.Label>
                            <Form.Control as="select">
                                <option>Choisir une ville</option>
                                <option value="Paris">Paris</option>
                                <option value="Montreuil">Montreuil</option>
                                <option value="Viroflay">Viroflay</option>
                                <option value="Vélizy-Villacoublay">Vélizy-Villacoublay</option>
                                <option value="Montpellier">Montpellier</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicTitle">
                            <Form.Label><h3>Code postal</h3></Form.Label>
                            <Form.Control type="number" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicTitle">
                            <Form.Label><h3>Adresse</h3></Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicTitle">
                            <Form.Label><h3>Tel</h3></Form.Label>
                            <Form.Control type="tel" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicTitle">
                            <Form.Label><h3>E-mail</h3></Form.Label>
                            <Form.Control type="email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="J'assume ce que j'ai écrit" />
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
                        <ListGroup.Item className="font-weight-bold border-0">Nom: <span className="font-weight-bold">Patrick</span></ListGroup.Item>
                        <ListGroup.Item className="font-weight-bold border-0">Prénom: <span className="font-weight-bold">Dimitri</span></ListGroup.Item>
                        <ListGroup.Item className="font-weight-bold border-0">Téléphone: <span className="font-weight-bold">0634758154</span></ListGroup.Item>
                        <ListGroup.Item className="font-weight-bold border-0">E-mail: <span className="font-weight-bold">dimitri.patrick@gmail.com</span></ListGroup.Item>
                        <ListGroup.Item className="font-weight-bold border-0">Adresse: <span className="font-weight-bold">45 impasse du moulin</span></ListGroup.Item>
                        <ListGroup.Item className="font-weight-bold border-0">Ville: <span className="font-weight-bold">Paris</span></ListGroup.Item>
                        <ListGroup.Item className="font-weight-bold border-0">Code postal: <span className="font-weight-bold">92000</span></ListGroup.Item>
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

export default DeliveryList
