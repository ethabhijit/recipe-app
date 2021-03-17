import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import Header from "./Header";
import "./App.css";

const App = () => {
  const APP_ID = "9b388110";
  const APP_KEY = "5ee23c53dc3c96e8ff08d9fe38b4b450";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <Header />
      <div class="container">
        <div class="columns">
          <div class="column"></div>
          <div class="column">
            <form id="form-container" onSubmit={getSearch}>
              <input
                class="input is-primary"
                type="text"
                placeholder="e.g - Chiken"
                value={search}
                onChange={updateSearch}
              />
              <button class="button is-primary is-light" type="submit">Search</button>
            </form>
          </div>
          <div class="column"></div>
        </div>
      </div>
      <div id="container">
        {recipes.map((recipe, index) => (
          <Recipe
            key={index}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
