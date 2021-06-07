import React from 'react'
import {
    Switch,
    Route,
    Link,
} from "react-router-dom";

//Deliverer handling components import
import NewsList from './NewsList'
import AddNews from './AddNews'

function News() {
    return (
        <div>
            <h2>Livreur</h2>
            <ul>
                <li>
                    <Link to="/news/liste">Liste news</Link>
                </li>
                <li>
                    <Link to="/news/ajouter">Ajouter une News</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path="/news/liste">
                    <NewsList />
                </Route>
                <Route exact path="/news/ajouter">
                    <AddNews />
                </Route>
            </Switch>
        </div>
    )
}

export default News
