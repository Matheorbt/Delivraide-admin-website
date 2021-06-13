import React from 'react'

// React Bootstrap import
import { Container, Button, Form } from 'react-bootstrap';

function AddNews() {
    return (
        <>
            <Container className="mb-5">
                <h1>Ecrire une news</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label><h3>Titre</h3></Form.Label>
                        <Form.Control size="lg" type="text" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label><h3>Contenu</h3></Form.Label>
                        <Form.Control as="textarea" type="text" required />
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

export default AddNews
