import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import DetalleCanciones from './components/DetalleCanciones/DetalleCanciones';
import DetalleAlbum from './components/DetalleAlbum/DetalleAlbum';

function App() {
  return (
        <>
        <Switch>
            <Route path="/" exact={true} component={Home}/>
            <Route path="/canciones/:id" component = {DetalleCanciones}/>
            <Route path="/albumes/:id" component = {DetalleAlbum}/>
        </Switch>
        </>
  );
}

export default App;
