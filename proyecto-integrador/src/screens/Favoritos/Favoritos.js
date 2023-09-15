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
        
        fetch()
          .then((res) => res.json())
          .then((data) =>
            this.setState({
              albumsFavoritos: data,
            })
          )
          .catch((err) => console.log(err));

      }

    render(){
        return (
            <React.Fragment>
    
            <h1>Favoritos</h1>
            <section className="favoritosAlbum" ></section>
             {this.state.favoritosAlbum.map((unAlbum, idx) => {
            if (idx === favoritosAlbum.length) {
              return (<Albums/>)
            } else {return (null)}
          })} 
            
            {this.state.favoritosAlbum.length > 0 ? <Contenedor info={this.state.favoritosAlbum}/> : <h3>Cargando...</h3>}

            </React.Fragment>
        );    
    }
}


export default Favoritos
