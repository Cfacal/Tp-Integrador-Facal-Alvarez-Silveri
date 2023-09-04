import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './screens/Home/Home';
import DetalleCanciones from './screens/DetalleCanciones/DetalleCanciones';
import DetalleAlbum from './screens/DetalleAlbum/DetalleAlbum';
import NoEncontrada from './screens/NoEncontrada/NoEncontrada';

function App() {
  return (
        <>
        <Switch>
            <Route path="/" exact={true} component={Home}/>
            <Route path="/canciones/:id" component = {DetalleCanciones}/>
            <Route path="/albumes/:id" component = {DetalleAlbum}/>
            <Route path="" component = {NoEncontrada}/>
        </Switch>
        </>
  );
}

export default App;