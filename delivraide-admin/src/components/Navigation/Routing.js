import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//Components router import
import Home from '../Home';

//Deliverer
import Deliverer from '../Deliverer/Deliverer';
import DelivererList from '../Deliverer/DelivererList'
import AddDeliverer from '../Deliverer/AddDeliverer'

//News
import News from '../News/News';
import NewsList from '../News/NewsList';
import AddNews from '../News/AddNews';

// Deelivery
import Delivery from '../Delivery/Delivery';
import DeliveryList from '../Delivery/DeliveryList';
import AddDelivery from '../Delivery/AddDelivery';

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
        <Route path="/livreur/liste">
          <DelivererList />
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
        {/* Route for delivery */}
        <Route path="/livraison">
          <Delivery />
        </Route>
        <Route path="/livraison/liste">
          <DeliveryList />
        </Route>
        <Route path="/livraison/ajouter">
          <AddDelivery />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routing;
