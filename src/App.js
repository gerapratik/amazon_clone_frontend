import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import Login2 from './Login2'

function App() {
  return (
    <Router>
      <div className="App">
        {/* <h1>Amazon Store</h1> */}
        <Switch>
        <Route path='/login'>
          
          <Login/>
            {/* <Login/> */}
          </Route>

        <Route path='/checkout'>
            <Header />
            {/* <p>Checkout page</p> */}
            <Checkout/>
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
          
        </Switch>

      </div>
    </Router>
    //header
    //home component
  );
}

export default App;
