import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Contenedor from "../../components/Contenedor/Contenedor";



class Favoritos extends Component {
    constructor(props){
        super(props);
        this.state = {
            favoritosAlbum : [],
            favoritosTracks: [],
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

        //fav album
        let recuperoStorage = localStorage.getItem('albumes');
        let favoritosArray = JSON.parse(recuperoStorage);
        if (favoritosArray === null){
            favoritosArray = []
        }

        //favTracks
        let recuperoStorageT = localStorage.getItem('favoritosCanciones');
        let arrayTracks = JSON.parse(recuperoStorageT);
        if (arrayTracks === null){
            arrayTracks = []
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

        });

        arrayTracks.map((id)=>{
            fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/track/${id}`)
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              this.setState({
                favoritosTracks: this.state.favoritosTracks.concat(data)
              })
          })
            .catch((err) => console.log(err));

        })
        
       

      }

    render(){
        return (
            
            <>
            <Navbar/>
            <h1>Favoritos</h1>
            <section>
                <h2>Albumes favoritos</h2>
                {this.state.favoritosAlbum.length === 0? "No hay albumes favoritos": <Contenedor info={this.state.favoritosAlbum} esAlbum={true}/>}
                <h2>Tracks favoritos</h2>
                {this.state.favoritosTracks.length === 0? "No hay tracks favoritos": <Contenedor info={this.state.favoritosTracks} esAlbum={false}/>}
            </section>
    

            </> 
        );    
    }
}


export default Favoritos
