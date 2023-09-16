import React, {Component} from "react";
import Contenedor from "../../components/Contenedor/Contenedor"
import Navbar from "../../components/Navbar/Navbar";


class VerTodasTracks extends Component{
    constructor(props){
      super(props);
      this.state = {
        Tracks: [],
        n_pag: [],
      }
    }

    componentDidMount() {
        this.agregarTracks()
    }

    agregarTracks(){
    fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks?index=0&limit=100')
            .then((res) => res.json())
            .then((datos) =>
                this.setState({
                    Tracks: this.state.Tracks.concat(datos.data),
                    n_pag: this.state.n_pag + 1
                }), 
            )
            .catch((e) => console.log(e));
        }
    render(){
        return (
            <React.Fragment>
                <Navbar/>
                <h1> Todos los Tracks</h1>
                <button onClick={this.agregarTracks()}className="linkHome">Ver mas</button>
                <section >
                <Contenedor className="seccionAlbumTracks" info = {this.state.Tracks} esAlbum={false}/>
                </section>
                
            </React.Fragment>
        )
    }
}

export default VerTodasTracks;