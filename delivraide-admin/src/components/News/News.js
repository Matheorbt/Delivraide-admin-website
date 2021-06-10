import React from 'react'
import {
    Switch,
    Route
} from "react-router-dom";
import NavigationBar from '../Navigation/NavigationBar'

//Deliverer handling components import
import NewsList from './NewsList'
import AddNews from './AddNews'

function News() {
    return (
        <div>
            <NavigationBar />
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
