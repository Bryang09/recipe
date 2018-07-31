import React, { Component } from 'react';
import axios from 'axios';

import './Home.css';
import Form from '../Form/Form';
import Recipes from '../Recipes/Recipes';

const API_KEY = 'ef0d357a71c094e6330edb470f26de18';

class Home extends Component {
  state = {
    recipes: []
  }

  getRecipe = (e) => {
    e.preventDefault();
    const recipeName = e.target.elements.recipeName.value;
    axios.get(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}`)
      .then(res => this.setState({ recipes: res.data.recipes }))
  }
  render() {
    return (
      <div className="Recipe_App">
        <div className="Recipe_Header">
          <h1>Recipe Search</h1>
        </div>
        <Form getRecipe={this.getRecipe} />
        <div className="Recipe_Content">
          <Recipes recipes={this.state.recipes} />
        </div>
      </div>
    )
  }
}

export default Home;