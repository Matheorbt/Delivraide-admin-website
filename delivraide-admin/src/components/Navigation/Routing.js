import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//Components router import
import Home from '../Home';

//Deliverer
import Deliverer from '../Deliverer/Deliverer';
import DelivererApply from '../Deliverer/DelivererApply'
import AddDeliverer from '../Deliverer/AddDeliverer'

//News
import News from '../News/News';
import NewsList from '../News/NewsList';
import AddNews from '../News/AddNews';

function Routing() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {/* Route for deliverer */}
        <Route path="/livreur">
          <Deliverer />
        </Route>
        <Route path="/livreur/candidature">
          <DelivererApply />
        </Route>
        <Route path="/livreur/ajouter">
          <AddDeliverer />
        </Route>
        {/* Route for news */}
        <Route path="/news">
          <News />
        </Route>
        <Route path="/news/ajouter">
          <AddNews />
        </Route>
        <Route path="/news/liste">
          <NewsList />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routing;
