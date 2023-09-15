import React, { Component } from "react";
import Albums from "../../components/Albums/Albums";

import Contenedor from "../../components/Contenedor/Contenedor";










class Favoritos extends Component {
    constructor(props){
        super(props);
        this.state = {
            favoritosAlbum : []
        }
      }
      
      recuperoStorage(){
        let recuperoStorage = localStorage.getItem('favoritos')
        console.log(recuperoStorage);
        let favoritosAlbum = JSON.parse(recuperoStorage);
        return favoritosAlbum
      }
    
      componentDidMount() {
        
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/album/${this.props.match.params.id}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            this.setState({
                favoritosAlbum: data,
            })
        })
          .catch((err) => console.log(err));

      }

    render(){
        return (
            
            <>
            <h1>Favoritos</h1>
            <section className="favoritosAlbum" ></section>
             {this.state.favoritosAlbum.map((unAlbum, idx) => {
            if (idx === favoritosAlbum.length) {
              return (<Albums/>)
            } else {return (null)}
          })} 
            
            {this.state.favoritosAlbum.length > 0 ? <Contenedor info = {this.state.favoritosAlbum} esAlbum={true}/> : <h3>Cargando...</h3>}

            </> 
        );    
    }
}


export default Favoritos
