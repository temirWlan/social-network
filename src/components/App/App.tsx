import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from '../Navbar';
import { HomePage } from '../../pages';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
