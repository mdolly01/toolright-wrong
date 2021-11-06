import './App.css';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import Account from './Account';
import SearchPage from './SearchPage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


function App() {
  return (
    //BEM

    <div className="app">
      <Router>
      
        <Header />
        
        <Switch>
          <Route path="/account">
            <Account />
          </Route>

          <Route path="/search">
          <SearchPage />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>
        <Footer />
     
      </ Router>
     
    </div>
  );
}

export default App;
