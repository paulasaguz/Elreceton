import React, { Component, Fragment } from 'react';
import Layout from './pages/layout.js'
import Recipe from './recipe';
import FormReceta from './form'; 
import axios from 'axios';

class Recipes extends Component {
  state = {
    recipes: [],
  }

  constructor(props){
    super(props);
    this.getRecipes = this.getRecipes.bind(this);
  }

  getRecipes = () => {
    return axios.get('https://comidasdevfdiciembre.herokuapp.com/api/comida/v1/comidas').then((response) => {
      this.setState({ recipes: response.data.res })
    })
  }

  componentDidMount(){
    this.getRecipes();
  }
  render(){
    return (
      <fragment>
        <Layout>
          <FormReceta onRecipes={this.getRecipes}/>
          <div className="recetario">
            {this.state.recipes.length === 0 
            ? <h1>Cargando...</h1> 
            : this.state.recipes.map(recipe =>
              <Recipe key={recipe._id} recipe={recipe} onRecipes={this.getRecipes}/>
              )
            }
          </div>
        </Layout>
      </fragment>
    )
  }
}
export default Recipes;