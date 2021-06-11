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
                        <Form.Control size="lg" type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label><h3>Nom</h3></Form.Label>
                        <Form.Control size="lg" type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label><h3>Adresse e-mail</h3></Form.Label>
                        <Form.Control size="lg" type="email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label><h3>Ville</h3></Form.Label>
                        <Form.Control size="lg" type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label><h3>Age</h3></Form.Label>
                        <Form.Control size="lg" type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label><h3>Profession</h3></Form.Label>
                        <Form.Control size="lg" type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="J'assume ce que j'ai écrit" />
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
