import React, { Component } from "react";

class BuscadorAlbum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valorInput: "",
    };
  }

  detenerDefault(evento) {
    evento.preventDefault();
  }

  guardarInput(evento) {
    this.setState(
      {
        valorInput: evento.target.value,
      },
      () => {
          this.props.filtrado(this.state.valorInput);
          console.log(this.state)
        
        }
    );
  }

  render() {
    return (
      <form onSubmit={(evento) => this.detenerDefault(evento)}>
          <label>Buscar canciones</label>
        <input
          type="text"
          onChange={(evento) => this.guardarInput(evento)}
          value={this.state.valorInput}
        />
        <input type="submit" value="Buscar"/>
      </form>
    );
  }
}

export default BuscadorAlbum;
