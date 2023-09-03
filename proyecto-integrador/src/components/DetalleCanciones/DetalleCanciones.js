import React, {Component} from "react";

class DetalleCanciones extends Component{
    constructor(props){
        super(props);
        this.state = {
            cancion: [],
        }
    }

componentDidMount(){
    fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/track/${this.props.match.params.id}`)
    .then((response)=> response.json())
    .then((datos)=> 
    this.setState({
        cancion: datos
    }))
    .catch(error => console.log(error));
}

render(){
    return(
        <>
    {this.state.cancion.length === 0 ? 
        <h2>Cargando...</h2> : (<section>
        <img src={this.state.cancion.album.cover_medium} alt={this.state.cancion.title} />
        <h2>{this.state.cancion.title}</h2>
         <p>Artista: {this.state.cancion.artist.name}</p>
         <p>Nombre del disco: {this.state.cancion.album.title}</p>
         <audio controls>
            <source src= {this.state.cancion.preview}/>
         </audio>
         {/* Agregar a favoritos */}
        </section>)}
      
        </>
    )
}

}

export default DetalleCanciones;