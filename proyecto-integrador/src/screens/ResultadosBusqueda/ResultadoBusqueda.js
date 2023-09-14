import React, {Component} from "react";

import Footer from "../../components/Footer/Footer";
import Contenedor from "../../components/Contenedor/Contenedor";
import Navbar from "../../components/Navbar/Navbar";

class ResultadoBusqueda extends Component {
    constructor(props){
        super(props);
        this.state = {
            busqueda: this.props.match.params.busqueda,
            resultadosAlbum: [],
            resultadosCanciones: []
        }
    }

componentDidMount(){
    fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/search?q=album:${this.state.busqueda}&index=0&limit=5`)
    .then((response) => response.json())
    .then((datos) =>
    this.setState({
        resultadosAlbum: datos.data
    }))
    .catch(error => console.log(error));
    fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/search?q=track:${this.state.busqueda}&index=0&limit=5`)
    .then((response) => response.json())
    .then((datos) =>
    this.setState({
        resultadosCanciones: datos.data
    }))
    .catch(error => console.log(error));
}

render(){
    return(
        <>
        <Navbar/>
        <section>    
        <h2>Resultados de búsqueda: {this.props.match.params.busqueda}</h2>
        {this.state.resultadosAlbum.length >0 ? <Contenedor info={this.state.resultadosAlbum} esAlbum={true} esBusqueda={true}/> : "No se encontraron albumes que coincidan con la búsqueda"}
        {this.state.resultadosCanciones.length >0 ? <Contenedor info={this.state.resultadosCanciones} esAlbum={false}/> : "No se encontraron canciones que coincidan con la búsqueda"}
        </section>
    
        <Footer/>
        </>
    );
}

}

export default ResultadoBusqueda;