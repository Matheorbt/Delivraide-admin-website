import './styles/index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//Components router import
import Home from './components/Home';

//Deliverer
import Deliverer from './components/Deliverer/Deliverer';
import DelivererApply from './components/Deliverer/DelivererApply'
import AddDeliverer from './components/Deliverer/AddDeliverer'

//News
import News from './components/News/News';
import NewsList from './components/News/NewsList';
import NewsAdd from './components/News/AddNews';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/livreur">Livreur</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/* Route for deliverer */}
          <Route exact path="/livreur">
            <Deliverer />
          </Route>
          <Route exact path="/livreur/candidature">
            <DelivererApply />
          </Route>
          <Route exact path="/livreur/ajouter">
            <AddDeliverer />
          </Route>
          {/* Route for news */}
          <Route exact path="/news">
            <News />
          </Route>
          <Route exact path="/news/ajouter">
            <NewsAdd />
          </Route>
          <Route exact path="/news/liste">
            <NewsList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
