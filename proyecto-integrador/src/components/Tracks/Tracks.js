import React, {Component} from "react";
import "./Tracks.css"

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
       {this.props.canciones.position <= 5 ? <article>
        <img src={this.props.canciones.album.cover} alt={this.props.canciones.title} />
        <h2>{this.props.canciones.title}</h2>
        <p>{this.props.canciones.artist.name}</p>
        <button onClick={() => this.verMas()}>{this.state.texto}</button>
        <section className={this.state.verMas ? "show": "hide"}>  <p>Duración: {this.props.canciones.duration}</p></section>
       </article>: ""}
    {/* // Link o botón “ir a detalle” para ir a la página de detalle del elemento.
    // Link, botón o ícono "agregar/ quitar de favoritos". */}
       </>
    )
}
}

export default Tracks; 