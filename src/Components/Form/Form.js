import React from 'react';

import './Form.css'

const Recipe_Form = props => {
  return (
    <div className="Recipe_Form">
      <form onSubmit={props.getRecipe}>
        <input type="text" name="recipeName" />
        <button>Search</button>
      </form>
    </div>
  )
}

export default Recipe_Form;