import React, {Component} from "react";
import Footer from "../../components/Footer/Footer";

class DetalleAlbum extends Component{
    constructor(props){
        super(props);
        this.state = {
            album: [],
            textoBoton: 'Agregar a Favoritos',
        }
    }

componentDidMount(){
    fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/album/${this.props.match.params.id}`)
    .then((response)=> response.json())
    .then((datos)=> 
    this.setState({
        album: datos
    }))
    .catch(error => console.log(error));
}

modificarFavoritos(id){

    let favoritos = [];
    favoritos.push(id);

    let favoritosString = JSON.stringify(favoritos);
    localStorage.setItem('favoritos', favoritosString);
    
}

render(){
    console.log(this.state.album)
    return(
        <>
        {this.state.album.length === 0 ? 
        <h2>Cargando...</h2> : (<section>
        <img src={this.state.album.cover_medium} alt={this.state.album.title} />
        <h2>{this.state.album.title}</h2>
         <p>Artista: {this.state.album.artist.name}</p>
         <p>Nombre del disco: {this.state.album.title}</p>
        <p>Género: {this.state.album.genres.data[0].name}</p>
        <p>Listado de canciones:</p>
        {this.state.album.tracks.data.map((cancion, i) => (
            <div key = {cancion + i}>
            <ul ><li >{cancion.title}</li></ul>
            </div>
        
        ))}
        <button onClick={() => this.modificarFavoritos()} type="button">{this.state.textoBoton}</button>
        {/*  Agregar a favoritos*/}
        </section>)}
        <Footer/>

        </>
    )
}

}

export default DetalleAlbum;