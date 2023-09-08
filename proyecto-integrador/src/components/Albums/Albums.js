import React, {Component} from "react";
import "./Albums.css";
import { Link } from "react-router-dom";


class Albums extends Component{
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
        {this.props.albumes.position <= 5? <article className="character-card">
            <img src={this.props.albumes.cover} alt={this.props.albumes.title} />
            <h2 className="title">{this.props.albumes.title}</h2>
            <p>Artista: {this.props.albumes.artist.name}</p>
            <button onClick={() => this.verMas()}>{this.state.texto}</button>
            <div><section className={this.state.verMas ? "show": "hide"}>  <p>Id: {this.props.albumes.id}</p></section>
            <Link to={`/albumes/${this.props.albumes.id}`}>
            <button>Ir a detalle</button>
            </Link>
            </div>
        </article>: ""}
        {/* // Link o botón “ir a detalle” para ir a la página de detalle del elemento.
        // Link, botón o ícono "agregar/ quitar de favoritos". */}

        </>
    )
}

}

export default Albums;