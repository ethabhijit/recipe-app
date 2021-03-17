import React from "react";
import "./App.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={image} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{title}</p>
              <button className="button is-danger is-light">{calories}</button>
            </div>
          </div>
      
          <div className="content">
            <ul>
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient.text}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
  );
};

export default Recipe;
