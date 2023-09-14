import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import "./Formulario.css";

class Formulario extends Component {
    constructor(props) {
        super(props);
            this.state = {
                busqueda: "",
                BuscarAlbum: false
            };
        }

evitarSubmit(evento){
    evento.preventDefault()
}
      

guardarInput(evento){
    this.setState(
        {busqueda: evento.target.value}
    );
}


render(){
    return(
        <>
        <section className='formulario'>
            <form onSubmit={(evento) => this.evitarSubmit(evento)}>
                <input className="input" type="text" placeholder="Buscar" onChange={(evento) =>this.guardarInput(evento)} value={this.state.busqueda}/>
                <Link to = {`/busqueda/${this.state.busqueda}`}><button className='boton'>Buscar</button></Link>
            </form>
        </section>
        
        </>
    );
}

    }

export default Formulario; 