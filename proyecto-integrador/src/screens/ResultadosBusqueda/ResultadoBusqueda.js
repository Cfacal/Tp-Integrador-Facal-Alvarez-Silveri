import React, {Component} from "react";

import Footer from "../../components/Footer/Footer";
import Contenedor from "../../components/Contenedor/Contenedor";

class ResultadoBusqueda extends Component {
    constructor(props){
        super(props);
        this.state = {
            busqueda: this.props.match.params.busqueda,
            resultados: []
        }
    }

componentDidMount(){
    fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/search?q=${this.state.busqueda}`)
    .then((response) => response.json())
    .then((datos) =>
    this.setState({
        resultados: datos.data
    }))
    .catch(error => console.log(error));
}

render(){
    return(
        <>
        {this.state.resultados.length >0 ? <Contenedor info={this.state.resultados} esResultado = {true}/> : <h2>No se encontraron resultados</h2>}
        <Footer/>
        </>
    );
}

}

export default ResultadoBusqueda;