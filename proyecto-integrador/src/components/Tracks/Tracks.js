import React, {Component} from "react";
import "./Tracks.css";
import { Link } from "react-router-dom";

class Tracks extends Component{
    constructor(props){
        super(props);
        this.state = {
            verMas: false, 
            texto: "Ver más",
            textoBoton: 'Agregar a Favoritos',
        };
    }

verMas(){
    if(this.state.verMas === false){
        this.setState({
            verMas: true,
            texto: "Ver menos"
        });
    }else{
        this.setState({
            verMas: false, 
            texto: "Ver más"
        });
    }
}

componentDidMount(){
    //chequear si el id esta en el array de favoritos
    let recuperoStorage = localStorage.getItem('favoritosCanciones');

    if (recuperoStorage != null) {
        let favoritos = JSON.parse(recuperoStorage);
        //si esta cambiar el texto del boton
        if(favoritos.includes(this.props.albumes.id)){
            this.setState({
                textoBoton: 'Quitar de favoritos'
            })
        }
    }
    
    
}

modificarFavoritos(id){
    //guardar id en array y luego en local storage
    let favoritos = [];
    let recuperoStorage = localStorage.getItem('favoritosCanciones');

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
    localStorage.setItem('favoritosCanciones', favoritosString);

    console.log(localStorage);
    
}

render(){
    return(
       <>
       <article className="character-card">
        <img src={this.props.canciones.album.cover} alt={this.props.canciones.title} />
        <h2 className="title">{this.props.canciones.title}</h2>
        <p>Artista: {this.props.canciones.artist.name}</p>
        <button onClick={() => this.verMas()}>{this.state.texto}</button>
        <div><section className={this.state.verMas ? "show": "hide"}>  <p>Duración: {this.props.canciones.duration}</p></section>
        <Link to={`/canciones/${this.props.canciones.id}`}>
            <button>Ir a detalle</button>
        </Link></div>
        <button onClick={() => this.modificarFavoritos(this.props.canciones.id)} type="button">{this.state.textoBoton}</button>
       </article>
    {/* Link, botón o ícono "agregar/ quitar de favoritos". */}
       </>
    )
}
}

export default Tracks; 