import React, {Component} from "react";
import Footer from "../../components/Footer/Footer";
import Contenedor from "../../components/Contenedor/Contenedor";
import Formulario from "../../components/Formulario/Formulario";
import Navbar from "../../components/Navbar/Navbar";

class Home extends Component {
    constructor(){
        super();
        this.state = {
            canciones: [],
            albumes: []
        };
    }

componentDidMount(){
    fetch("https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks?index=0&limit=5")
    .then((response)=> response.json() )
    .then((datos)=> 
    this.setState({
        canciones: datos.data
    }))
    .catch(error => console.log(error));
    fetch("https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums?index=0&limit=5")
    .then((response)=> response.json())
    .then((datos)=> 
    this.setState({
        albumes: datos.data
    }))
    .catch(error => console.log(error));
}

render(){
    return(
        <>
        <Formulario/>
        <Navbar/>
        <h1>Tendencias</h1>
        <h2>Canciones más escuchadas</h2>
        <Contenedor info = {this.state.canciones} esAlbum={false}/>
        <h2>Albumes más escuchados</h2>
        <Contenedor info = {this.state.albumes} esAlbum={true}/>
        <Footer/>
        </>
    )
}

}

export default Home;