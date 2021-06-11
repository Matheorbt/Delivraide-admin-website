import React from 'react'
import {
    Switch,
    Route
} from "react-router-dom";
import NavigationBar from '../Navigation/NavigationBar'

//Deliverer handling components import
import DelivererList from './DelivererList'
import AddDeliverer from './AddDeliverer'

function Deliverer() {
    return (
        <div>
            <NavigationBar />
            <Switch>
                <Route exact path="/livreur/liste">
                    <DelivererList />
                </Route>
                <Route exact path="/livreur/ajouter">
                    <AddDeliverer />
                </Route>
            </Switch>
        </div>
    )
}

export default Deliverer
