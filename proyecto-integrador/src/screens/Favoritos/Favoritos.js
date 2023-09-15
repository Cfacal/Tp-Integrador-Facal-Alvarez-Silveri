import React, { Component } from "react";
import Albums from "../../components/Albums/Albums";

import Contenedor from "../../components/Contenedor/Contenedor";



class Favoritos extends Component {
    constructor(props){
        super(props);
        this.state = {
            favoritosAlbum : [],
            favoritosArray: []
        }
      }
      
    //   recuperoStorage(){
    //     let recuperoStorage = localStorage.getItem('favoritos')
    //     console.log(recuperoStorage);
    //     let favoritosAlbum = JSON.parse(recuperoStorage);
    //     return favoritosAlbum
    //   }
    
      componentDidMount() {

        let recuperoStorage = localStorage.getItem('albumes');
        let favoritosArray = JSON.parse(recuperoStorage);
        if (favoritosArray === null){
            favoritosArray = []
        }

        favoritosArray.map((id)=>{
            fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/album/${id}`)
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              this.setState({
                  favoritosAlbum: this.state.favoritosAlbum.concat(data)
              })
          })
            .catch((err) => console.log(err));

        })
        
       

      }

    render(){
        return (
            
            <>
            <h1>Favoritos</h1>
            <section>
                <h2>Albumes favoritos</h2>
                {this.state.favoritosAlbum.length === 0? "No hay albumes favoritos": <Contenedor info={this.state.favoritosAlbum} esAlbum={true}/>}
            </section>
    

            </> 
        );    
    }
}


export default Favoritos
