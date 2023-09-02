import React, {Component} from "react";
import Tracks from "../Tracks/Tracks";
import Albums from "../Albums/Albums";

class Home extends Component {
    constructor(){
        super();
        this.state = {
            canciones: [],
            albumes: []
        };
    }

componentDidMount(){
    fetch("https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks")
    .then((response)=> response.json())
    .then((datos)=> 
    this.setState({
        canciones: datos.data
    }))
    .catch(error => console.log(error));
    fetch("https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums")
    .then((response)=> response.json())
    .then((datos)=> 
    this.setState({
        albumes: datos.data
    }))
    .catch(error => console.log(error));
}

render(){
    console.log(this.state.canciones)
    return(
        <>
        {/* Formulario de búsqueda --> ver si va acá  o si lo metes en el header para que quede más pro*/}
        <h1>Tendencias</h1>
        <h2>Canciones más escuchadas</h2>
        {this.state.canciones.length === 0 ? 
        <h2>Cargando...</h2>: (<section>
        {this.state.canciones.map((canciones, i) => (
            <Tracks key={canciones.id+i} canciones={canciones} /> 
        ))}
        {/* Link para la página para ver todas las canciones */}
        </section>)}
        <h2>Albumes más escuchados</h2>
        {this.state.albumes.length === 0 ? 
        <h2>Cargando...</h2> : (<section>
            {this.state.albumes.map((album, i) => (
                <Albums key={album.id + i} albumes = {album}/>
            ))}
        </section>)}
        </>
    )
}

}

export default Home;