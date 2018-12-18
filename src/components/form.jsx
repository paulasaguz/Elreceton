import React, { Component, Fragment} from 'react';
import axios from 'axios';

class FormReceta extends Component {

  state = {
  recetaEnviar: {
    nombredelplatillo: "",
    costo: "",
    categoria: "",
    ingredientes: [],
    image: "https://images-gmi-pmc.edge-generalmills.com/7286a0e6-bc5d-464d-9490-7470a1b54e3e.jpg"
    },
  recetaRec: { 
    id: "",
    nombredelplatillo: "",
    costo: "",
    categoria: "",
    ingredientes: [],
    image: "https://images-gmi-pmc.edge-generalmills.com/7286a0e6-bc5d-464d-9490-7470a1b54e3e.jpg"
    }
  }

  //CUANDO SE HACE UN SUBMIT
  handleChange = event => {
    const recetaEnviar = this.state.recetaEnviar;
    recetaEnviar[event.target.name] = event.target.value;
    this.setState({ recetaEnviar });
  }

  handleSubmit = event => {
    event.preventDefault(); //evita que el navegador se recargue
    const receton = {
      nombredelplatillo: this.state.recetaEnviar.nombredelplatillo,
      costo: this.state.recetaEnviar.costo,
      categoria: this.state.recetaEnviar.categoria,
      ingredientes: this.state.recetaEnviar.ingredientes,
      image: this.state.recetaEnviar.image
    };
    axios.post(`https://comidasdevfdiciembre.herokuapp.com/api/comida/v1/comidas`,
        receton
    )
    .then(response => {
        this.setState({ recetaRec: response.data.res})
    }).then(response =>{
        this.props.onRecipes()
    });
    console.log("ya di click");
};

  render(){
    return (
      <div className="form">
        <h3>Ingresa tu receta favorita</h3>
        <form className="receta-form" onSubmit={this.handleSubmit}>
          <label>Receta:</label>
          <input type="text" name="nombredelplatillo" onChange={this.handleChange} />
          <label>Costo:</label>
          <input type="text" name="costo" onChange={this.handleChange} />
          <label>Categoria:</label>
          <input type="text" name="categoria" onChange={this.handleChange} />
          <label>Ingredientes:</label>
          <textarea rows="6" cols="33" type="text" name="ingredientes" placeholder="Separar ingredientes con comas" onChange={this.handleChange}></textarea>
          <button className="item-button" type="submit">Enviar</button>
        </form>
      </div>
    )
  }
}
export default FormReceta;