import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";

//Deliverer handling components import
import DelivererApply from './DelivererApply'
import AddDeliverer from './AddDeliverer'

function Deliverer() {
    return (
        <div>
            <h2>Livreur</h2>
            <ul>
                <li>
                    <Link to="/livreur/candidature">Candidature en attente</Link>
                </li>
                <li>
                    <Link to="/livreur/ajouter">Ajouter un livreur</Link>
                </li>
            </ul>
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
