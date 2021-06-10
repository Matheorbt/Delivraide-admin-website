import React from 'react'
import {
    Switch,
    Route,
    Link
} from "react-router-dom";
import NavigationBar from '../Navigation/NavigationBar'

//Deliverer handling components import
import DelivererApply from './DelivererApply'
import AddDeliverer from './AddDeliverer'

function Deliverer() {
    return (
        <div>
            <NavigationBar />
            <Switch>
                <Route exact path="/livreur/candidature">
                    <DelivererApply />
                </Route>
                <Route exact path="/livreur/ajouter">
                    <AddDeliverer />
                </Route>
            </Switch>
        </div>
    )
}

export default Deliverer
