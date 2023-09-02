import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';


function App() {
  return (
        <>
        <Switch>
            <Route path="/" exact={true} component={Home}/>
        </Switch>
        </>
  );
}

export default App;
