import React, {Component} from "react";
import Footer from "../../components/Footer/Footer";
import "./DetalleAlbum.css";

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
    

    let recuperoStorage = localStorage.getItem('albumes');

        if (recuperoStorage != null) {
            let favoritos = JSON.parse(recuperoStorage);
            //si esta cambiar el texto del boton
            if(favoritos.includes(this.state.album.id)){
                this.setState({
                    textoBoton: 'Quitar de favoritos'
                })
            }}
}

modificarFavoritos(id){
    //guardar id en array y luego en local storage
    let favoritos = [];
    let recuperoStorage = localStorage.getItem('albumes');

    if (recuperoStorage != null) {
        favoritos = JSON.parse(recuperoStorage);
    }

    if(favoritos.includes(id)){
        //pregunta si el id que esta pasando dentro de props esta dentro del array de favoritos
        //si esta hay que sacarlo
        favoritos = favoritos.filter( unId => unId !== id)

        this.setState({
            textoBoton: 'Agregar a favoritos'
        })

    } else {
        //si el id no esta
        favoritos.push(id);
        this.setState({
            textoBoton: 'Quitar de favoritos'
        })
    }
    //guardar en local storage
    let favoritosString = JSON.stringify(favoritos);
    localStorage.setItem('albumes', favoritosString);

}

render(){
    console.log(this.state.album)
    return(
        <>
        {this.state.album.length === 0 ? 
        <h2>Cargando...</h2> : (<section className="seccion">
        <img src={this.state.album.cover_medium} alt={this.state.album.title} />
        <h2>{this.state.album.title}</h2>
        <p className="texto">Artista: {this.state.album.artist.name}</p>
        <p className="texto">Nombre del disco: {this.state.album.title}</p>
        <p className="texto">Género: {this.state.album.genres.data[0].name}</p>
        <p className="texto">Listado de canciones:</p>
        {this.state.album.tracks.data.map((cancion, i) => (
            <div key = {cancion + i}>
            <ul className="items"><li >{cancion.title}</li></ul>
            </div>
        
        ))}
        <button onClick={() => this.modificarFavoritos(this.state.album.id)} type="button">{this.state.textoBoton}</button>
        </section>)}
        <br/>
        <Footer/>
    
    
       
        </>
    )
}

}

export default DetalleAlbum;