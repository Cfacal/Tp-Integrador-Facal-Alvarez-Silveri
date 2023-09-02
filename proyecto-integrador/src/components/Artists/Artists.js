import React, {Component} from "react";
import "./Artists.css"


class Artists extends Component{
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
        {this.props.artistas.position <= 5? <article>
            <img src={this.props.artistas.picture} alt={this.props.artistas.name} />
            <h2>{this.props.artistas.name}</h2>
            <button onClick={() => this.verMas()}>{this.state.texto}</button>
            <section className={this.state.verMas ? "show": "hide"}>  <p>Id: {this.props.artistas.id}</p></section>
        </article>: ""}
        {/* // Link o botón “ir a detalle” para ir a la página de detalle del elemento.
        // Link, botón o ícono "agregar/ quitar de favoritos". */}

        </>
    )
}

}

export default Artists;