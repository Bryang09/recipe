import React from 'react';
import { Link } from 'react-router-dom';

import './Recipes.css';

const Recipes = props => (
  <div className="Recipe_Recipes">
    {props.recipes.map(recipe => {
      return (
        <div key={recipe.recipe_id} className="Recipe_Style" >
          <img src={recipe.image_url} alt={recipe.title} />
          <p>{recipe.title.length < 25 ? `${recipe.title}` : `${recipe.title.substring(0, 30)}...`}</p>
          <h4>PUBLISHER: <span className="Recipe_Publisher">{recipe.publisher}</span></h4>
          <Link to={{
            pathname: `recipes/${recipe.recipe_id}`,
            state: { recipe: recipe.title }
          }}>View Recipe</Link>
        </div>
      )
    })}
    {console.log(props.recipes)}
  </div>
)

export default Recipes;