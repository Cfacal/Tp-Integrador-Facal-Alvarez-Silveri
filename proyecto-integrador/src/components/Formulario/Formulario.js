import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Formulario extends Component {
    constructor(props) {
        super(props);
            this.state = {
                busqueda: ""
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
        <section>
            <form onSubmit={(evento) => this.evitarSubmit(evento)}>
                <input type="text" placeholder="Buscar" onChange={(evento) =>this.guardarInput(evento)} value={this.state.busqueda}/>
                <Link to = {`/busqueda/${this.state.busqueda}`}>Buscar</Link>
            </form>
        </section>
        
        </>
    );
}

    }

export default Formulario; 