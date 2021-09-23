import logo from './logo.svg';
import React  from 'react';
import './App.css';
import Square from './Components/Square/Square';
import Game from './Pages/Game/Game';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Winner from './Pages/Winner/Winner';

function App() {
  return (
    <div className="App">
      <Router>  
          <Switch>
            <Route path="/" exact component={Game} />
            <Route path="/winner/" exact render={(props) => <Winner {...props} />} />
          </Switch>
      </Router>
      <p>
        wholesome tic tac toe :)
      </p>
    </div>
  );
}

export default App;
