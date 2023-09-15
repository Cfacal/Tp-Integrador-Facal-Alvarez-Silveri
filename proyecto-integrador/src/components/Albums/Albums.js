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
        let recuperoStorage = localStorage.getItem('albumes');

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

        // console.log(localStorage);
        
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
            {this.props.esBusqueda ?  
            <Link to={`/albumes/${this.props.albumes.album.id}`}>
            <button>Ir a detalle</button>
            </Link> 
            :  <Link to={`/albumes/${this.props.albumes.id}`}>
            <button>Ir a detalle</button>
            </Link> }
           
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