import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import Login from './components/Login';
import Done from './components/Done';

import './App.css';

function App() {
  const [token, setToken] = useState(null);

  return (
    <Router>
      <Navigation token={token} setToken={setToken} />
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login">
          <Login setToken={setToken} />
        </Route>
        <Route exact path="/dashboard/done" component={Done} />
        <Route path="/dashboard">
          <Dashboard token={token} />
        </Route>
        <Route exact path="/" render={() => <h1>Hello!</h1>} />
      </Switch>
    </Router>
  );
}

export default App;
