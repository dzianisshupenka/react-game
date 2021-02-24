import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/header';
import { Game, Help, Settings, Welcome } from './components/pages';

const App = () => {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Welcome} />
      <Route path="/game" exact component={Game} />
      <Route path="/settings" exact component={Settings} />
      <Route path="/help" exact component={Help} />
    </Router>
  );
};

export default App;
