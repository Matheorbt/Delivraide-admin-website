import React from 'react'

// React Bootstrap import
import { Container, Button, Form } from 'react-bootstrap';

function AddDeliverer() {
    return (
        <>
            <Container>
                <h1>Ajouter un livreur</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label><h3>Prénom</h3></Form.Label>
                        <Form.Control size="lg" type="text" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label><h3>Nom</h3></Form.Label>
                        <Form.Control size="lg" type="text" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label><h3>Adresse e-mail</h3></Form.Label>
                        <Form.Control size="lg" type="email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label><h3>Ville</h3></Form.Label>
                        <Form.Control size="lg" type="text" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label><h3>Age</h3></Form.Label>
                        <Form.Control size="lg" type="number" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label><h3>Profession</h3></Form.Label>
                        <Form.Control size="lg" type="text" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox" required>
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

export default AddDeliverer
