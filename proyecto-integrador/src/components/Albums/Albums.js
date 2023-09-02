import React, {Component} from "react";
import "./Albums.css"


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
        {this.props.albumes.position <= 5? <article>
            <img src={this.props.albumes.cover} alt={this.props.albumes.title} />
            <h2>{this.props.albumes.title}</h2>
            <p>{this.props.albumes.artist.name}</p>
            <button onClick={() => this.verMas()}>{this.state.texto}</button>
            <section className={this.state.verMas ? "show": "hide"}>  <p>Id: {this.props.albumes.id}</p></section>
        </article>: ""}
        {/* // Link o botón “ir a detalle” para ir a la página de detalle del elemento.
        // Link, botón o ícono "agregar/ quitar de favoritos". */}

        </>
    )
}

}

export default Albums;