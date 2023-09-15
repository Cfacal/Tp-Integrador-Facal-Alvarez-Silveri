import React, {Component} from "react";
import Footer from "../../components/Footer/Footer";
import "./DetalleCanciones.css";

class DetalleCanciones extends Component{
    constructor(props){
        super(props);
        this.state = {
            cancion: [],
            textoBoton: "Agregar a Favoritos"
        }
    }

componentDidMount(){
    fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/track/${this.props.match.params.id}`)
    .then((response)=> response.json())
    .then((datos)=> 
    this.setState({
        cancion: datos
    }))
    .catch(error => console.log(error));

    let recuperoStorageT = localStorage.getItem('favoritosCanciones');

    if (recuperoStorageT != null) {
        let favoritos = JSON.parse(recuperoStorageT);
        //si esta cambiar el texto del boton
        if(favoritos.includes(this.state.cancion.id)){
            this.setState({
                textoBoton: 'Quitar de favoritos'
            })
        }
    }
}

modificarFavoritos(id){
    //guardar id en array y luego en local storage
    let favoritos = [];
    let recuperoStorageT = localStorage.getItem('favoritosCanciones');

    if (recuperoStorageT != null) {
        favoritos = JSON.parse(recuperoStorageT);
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
    localStorage.setItem('favoritosCanciones', favoritosString);

    //console.log(localStorage);
    
}


render(){
    return(
        <>
    {this.state.cancion.length === 0 ? 
        <h2>Cargando...</h2> : (<section className="section">
        <img src={this.state.cancion.album.cover_medium} alt={this.state.cancion.title} />
         <div className="division">
         <h2>{this.state.cancion.title}</h2>
         <p className="letra">Artista: {this.state.cancion.artist.name}</p>
         <p className="letra">Nombre del disco: {this.state.cancion.album.title}</p>
         </div>
        
         <audio controls>
            <source src= {this.state.cancion.preview}/>
         </audio>

         <button className="botonCanciones" onClick={() => this.modificarFavoritos(this.state.cancion.id)} type="button">{this.state.textoBoton}</button>
 
         
        </section>)}
        <Footer/>
        </>
    )
}

}

export default DetalleCanciones;