import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./Recipe.css";

const API_KEY = "ef0d357a71c094e6330edb470f26de18";

class Recipe extends Component {
  state = {
    activeRecipe: []
  };

  componentDidMount = async () => {
    const title = this.props.location.state.recipe;
    // const req = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${title}`)
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${title}`
      )
      .then(res => this.setState({ activeRecipe: res.data.recipes[0] }));
    // console.log(this.props)
  };

  render() {
    return (
      <div className="Recipe NoOverflow">
        {this.state.activeRecipe.length !== 0 && (
          <div className="Recipe_Contain">
            <img
              src={this.state.activeRecipe.image_url}
              alt={this.state.activeRecipe.title}
            />
            <h3 className="Title">{this.state.activeRecipe.title}</h3>
            <div className="Recipe_Container">
              <h4>
                {" "}
                Publisher:{" "}
                <span className="Recipe_Publisher">
                  {this.state.activeRecipe.publisher}
                </span>
              </h4>
              <h4>
                {" "}
                Website:{" "}
                <span className="Website" style={{ fontWeight: 400 }}>
                  <a href={this.state.activeRecipe.source_url} target="_blank">
                    {this.state.activeRecipe.source_url}
                  </a>
                </span>
              </h4>
            </div>
            <div className="Recipe_HomeBtn">
              <h4>
                <Link to="/">Home</Link>
              </h4>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Recipe;
