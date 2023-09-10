import React, {Component} from "react";
import "./Albums.css";
import { Link } from "react-router-dom";


class Albums extends Component{
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
        let recuperoStorage = localStorage.getItem('favoritos');

        if (recuperoStorage != null) {
            let favoritos = JSON.parse(recuperoStorage);
            //si esta cambiar el texto del boton
            // favoritos
        }
        
        
    }

    modificarFavoritos(id){

        let favoritos = [];
        favoritos.push(id);
    
        let favoritosString = JSON.stringify(favoritos);
        localStorage.setItem('favoritos', favoritosString);

        this.setState({
            textoBoton: 'Quitar de favoritos'
        })
        
    }

render(){
    return(
        <>
        <article className="character-card">
            <img src={this.props.albumes.cover} alt={this.props.albumes.title} />
            <h2 className="title">{this.props.albumes.title}</h2>
            <p>Artista: {this.props.albumes.artist.name}</p>
            <button onClick={() => this.verMas()}>{this.state.texto}</button>
            <div><section className={this.state.verMas ? "show": "hide"}>  <p>Id: {this.props.albumes.id}</p></section>
            <Link to={`/albumes/${this.props.albumes.id}`}>
            <button>Ir a detalle</button>
            </Link>
            </div>
            <button onClick={() => this.modificarFavoritos(this.props.albumes.id)} type="button">{this.state.textoBoton}</button>
        </article>
        {/* // Link o botón “ir a detalle” para ir a la página de detalle del elemento.
        // Link, botón o ícono "agregar/ quitar de favoritos". */}

        </>
    )
}

}

export default Albums;