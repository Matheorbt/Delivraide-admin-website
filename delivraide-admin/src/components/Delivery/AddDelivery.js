import React from 'react'

// React Bootstrap import
import { Container, Button, Form } from 'react-bootstrap';

function AddDelivery() {
    return (
        <>
            <Container>
                <h1>Ajouter une livraison</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label><h3>Nom</h3></Form.Label>
                        <Form.Control size="lg" type="text" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label><h3>Prénom</h3></Form.Label>
                        <Form.Control type="text" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label><h3>Ville</h3></Form.Label>
                        <Form.Control as="select" required>
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
                        <Form.Control type="number" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label><h3>Adresse</h3></Form.Label>
                        <Form.Control type="text" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label><h3>Tel</h3></Form.Label>
                        <Form.Control type="tel" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label><h3>E-mail</h3></Form.Label>
                        <Form.Control type="email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="J'assume ce que j'ai écrit" required />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Enregistrer
                    </Button>
                </Form>
            </Container>
        </>
    )
}

export default AddDelivery