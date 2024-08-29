import React, { Component } from "react";
import ClassDisplay from "./ClassDisplay";

export default class ClassCounter extends Component {
  constructor(props) {
    super(props); //* Trer métodos de la Clase "Component" = class constructor { render }
    this.state = {
      contador: 0,
    };
  }
  sumarUno = () => {
    this.setState({ contador: this.state.contador + 1 });
  };

  componentDidUpdate() {
    console.log("ClassCounter se actualizó");
  }

  render() {
    return (
      <div>
        <h2>Contador de Clase</h2>
        <h3>Contador: {this.state.contador}</h3>
        <button onClick={this.sumarUno}>Sumar 1</button>
        {this.state.contador > 2 && this.state.contador < 5 ? (
          <ClassDisplay />
        ) : null}
      </div>
    );
  }
}
