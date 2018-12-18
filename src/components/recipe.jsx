import React, { Component, Fragment} from 'react';
import axios from 'axios';
import './recipe.css'

class Recipe extends Component {

  handleDelete = (id) =>{
    console.log("delete")
    axios.delete(`https://comidasdevfdiciembre.herokuapp.com/api/comida/v1/comidas/${id}`)
    .then(res =>{
      this.props.onRecipes()
    });
  }

  render(){
    return (
      <Fragment>
        <div className="receta-item">
          <img className="item-image" src={this.props.recipe.image} alt=""/>
          <h5>{this.props.recipe.nombredelplatillo}</h5>
          <ul className="item-list">
            <li>Costo: {this.props.recipe.costo}</li>
            <li>Categoría: {this.props.recipe.categoria}</li>
            <li>Ingredientes: <br/>
              {this.props.recipe.ingredientes.map(ingrediente => 
              <span key={ingrediente}>{ingrediente} </span>
              )}
            </li>
          </ul>
          <button className="item-button" onClick={() => this.handleDelete(this.props.recipe._id)}>Borrar</button>
        </div>
      </Fragment>
    )
  }
}
export default Recipe;