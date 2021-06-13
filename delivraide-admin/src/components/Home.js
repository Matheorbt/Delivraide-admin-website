import React from 'react'
import NavigationBar from './Navigation/NavigationBar'

import {
    Link
} from "react-router-dom";

// React Bootstrap import
import { Card, Container, Col, Row, ListGroup, Button } from 'react-bootstrap';

function Home() {
    let nbDelivery = 1162;
    let nbDeliverer = 298;
    let nbNews = 5;
    return (
        <div>
            <NavigationBar />
            <Container fluid>
                <Row className="mt-4 mb-4 d-flex justify-content-around align-content-center">
                    <Card bg="primary" className="d-flex align-content-stretch flex-grow-1 m-5">
                        <Card.Header className="d-flex justify-content-between align-items-center"><i style={{ fontSize: "32px" }} className="fa fa-newspaper-o mr-4 text-white" aria-hidden="true"></i><h3 className="text-white">Nb. de News</h3></Card.Header>
                        <Card.Body>
                            <Card.Title className="d-flex justify-content-center align-items-center">
                                <h3 className="text-white">{nbNews}</h3>
                            </Card.Title>
                        </Card.Body>
                    </Card>
                    <Card bg="info" className="d-flex align-content-stretch flex-grow-1 m-5">
                        <Card.Header className="d-flex justify-content-between align-items-center"><i style={{ fontSize: "32px" }} className="fa fa-bicycle mr-4 text-white" aria-hidden="true"></i><h3 className="text-white">Nb. de livreurs</h3></Card.Header>
                        <Card.Body>
                            <Card.Title className="d-flex justify-content-center align-items-center">
                                <h3 className="text-white">{nbDeliverer}</h3>
                            </Card.Title>
                        </Card.Body>
                    </Card>
                    <Card bg="danger" className="d-flex align-content-stretch flex-grow-1 m-5">
                        <Card.Header className="d-flex justify-content-between align-items-center"><i style={{ fontSize: "32px" }} className="fa fa-shopping-bag mr-4 text-white" aria-hidden="true"></i><h3 className="text-white">Nb. de Livraisons</h3></Card.Header>
                        <Card.Body>
                            <Card.Title className="d-flex justify-content-center align-items-center">
                                <h3 className="text-white">{nbDelivery}</h3>
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header className="d-flex justify-content-between align-items-center">
                                <Card.Title>Livraisons disponibles</Card.Title>
                                <Button as={Link} className="ml-10" to="/livraison/liste">En voir +</Button>
                            </Card.Header>
                            <ListGroup variant="flush" horizontal className="d-flex justify-content-between">
                                <ListGroup.Item className="font-weight-bold border-0">Ville</ListGroup.Item>
                                <ListGroup.Item className="font-weight-bold border-0">Nom</ListGroup.Item>
                                <ListGroup.Item className="font-weight-bold border-0">Tel.</ListGroup.Item>
                            </ListGroup>
                            <ListGroup variant="flush" className="d-flex justify-content-between" horizontal>
                                <ListGroup.Item className="font-weight-normal border-0">Paris</ListGroup.Item>
                                <ListGroup.Item className="font-weight-normal border-0">Dimitri</ListGroup.Item>
                                <ListGroup.Item className="font-weight-normal border-0">0607080901</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Header className="d-flex justify-content-between align-items-center">
                                <Card.Title>News Actuelles</Card.Title>
                                <Button as={Link} to="/news/liste" className="ml-10">En voir +</Button>
                            </Card.Header>
                            <ListGroup variant="flush" horizontal className="d-flex justify-content-around">
                                <ListGroup.Item className="font-weight-bold border-0">Titre</ListGroup.Item>
                                <ListGroup.Item className="font-weight-bold border-0">Date publi.</ListGroup.Item>
                            </ListGroup>
                            <ListGroup variant="flush" className="d-flex justify-content-around" horizontal>
                                <ListGroup.Item className="font-weight-normal border-0">Info livreur Montpellier</ListGroup.Item>
                                <ListGroup.Item className="font-weight-normal border-0">07/09/21</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
                {/* <Row>
                    <a href="https://twitter.com/intent/tweet?button_hashtag=delivraide&ref_src=twsrc%5Etfw" class="twitter-hashtag-button" data-show-count="false">Tweet #delivraide</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                </Row> */}
            </Container>
        </div>
    )
}

export default Home