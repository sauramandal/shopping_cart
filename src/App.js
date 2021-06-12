import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/Header';
import ProductsListing from './components/ProductsListing';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact component={ProductsListing} />
          <Route>404 not found</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
