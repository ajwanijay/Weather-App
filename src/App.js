import React from 'react';
import logo from './logo.svg';
import './App.css';
import Weather from './components/weather';
import { Route, Switch } from 'react-router-dom';
import Details from './components/details';
import FiveDay from './components/fiveDay';

function App() {
  return (
    <main className="container">
      <Weather />
      <div className="content">
        <Switch>
          {/* <Route path="/" component={Weather} /> */}
          <Route path="/city" component={Details} />
          <Route path="/details" component={FiveDay} />
        </Switch>

      </div>
    </main>
  );
}

export default App;
