import React from 'react'
import NavigationBar from '../Navigation/NavigationBar'

import {
    Switch,
    Route
} from "react-router-dom";

// React Bootstrap import
import { Card, Container, ListGroup, Button } from 'react-bootstrap';

//Delivery handling components import
import DeliveryList from './DeliveryList'
import AddDelivery from './AddDelivery'

function Delivery() {
    return (
        <>
            <NavigationBar />
            <Switch>
                <Route exact path="/livraison/liste">
                    <DeliveryList />
                </Route>
                <Route exact path="/livraison/ajouter">
                    <AddDelivery />
                </Route>
            </Switch>
        </>
    )
}

export default Delivery
