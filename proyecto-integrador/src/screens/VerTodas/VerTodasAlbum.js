import React, {Component} from "react";
import Contenedor from "../../components/Contenedor/Contenedor"
import Navbar from "../../components/Navbar/Navbar";


class VerTodasAlbum extends Component{
    constructor(props){
      super(props);
      this.state = {
        Album: [],
        n_pag: [],
      }
    }

    componentDidMount() {
        this.agregarAlbumes()
    }

    agregarAlbumes(){
    fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums?index=0&limit=100')
            .then((res) => res.json())
            .then((datos) =>
                this.setState({
                    Album: this.state.Album.concat(datos.data),
                    n_pag: this.state.n_pag + 1
                }), 
            )
            .catch((e) => console.log(e));
        }
    render(){
        return (
            <React.Fragment>
                <Navbar/>
                <h1> Todos los Albumes</h1>
                <button onClick={this.agregarAlbumes()}className="linkHome">Ver mas</button>
                <section className="contenedorVerMas">
                <Contenedor className="seccionAlbumTracks" info = {this.state.Album} esAlbum={true}/>
                </section>
                
            </React.Fragment>
        )
    }
}

export default VerTodasAlbum;