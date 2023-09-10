import React, {Component} from "react";
import "./Tracks.css";
import { Link } from "react-router-dom";

class Tracks extends Component{
    constructor(props){
        super(props);
        this.state = {
            verMas: false, 
            texto: "Ver más"
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
       </article>
    {/* Link, botón o ícono "agregar/ quitar de favoritos". */}
       </>
    )
}
}

export default Tracks; 