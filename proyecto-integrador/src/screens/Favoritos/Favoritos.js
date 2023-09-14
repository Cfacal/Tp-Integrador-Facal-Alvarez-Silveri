import React, { Component } from "react";
import Albums from "../../components/Albums/Albums";

import Contenedor from "../../components/Contenedor/Contenedor";

let recuperoStorage = localStorage.getItem('favoritos')



console.log(recuperoStorage);

let favoritosAlbum = JSON.parse(recuperoStorage);


class Favoritos extends Component {
    constructor(props){
        super(props);
        this.state = {
            favoritosAlbum : []
        }
      }
    
      componentDidMount() {
        
        fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums?index=0&limit=5')
          .then((res) => res.json())
          .then((data) =>
            this.setState({
              albumes: data,
            })
          )
          .catch((err) => console.log(err));

      }

    render(){
        return (
            <React.Fragment>
    
            <h1>Favoritos</h1>
            <section id="favoritosPelis" ></section>
             {this.state.favoritosAlbum.map((album, idx) => {
            if (idx === favoritosAlbum.length) {
              return (<Albums
              albumes={album}
            />)
            } else {return (null)}
          })} 
            
            {this.state.favoritosAlbum.length > 0 ? <Contenedor array={this.state.favoritosAlbum}/> : <h3>Cargando...</h3>}

            </React.Fragment>
        );    
    }
}


export default Favoritos
