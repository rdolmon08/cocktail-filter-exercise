import "./styles.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [cocktail, setCocktail] = useState([]);

  useEffect(() => {
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`)
      .then((response) => {
        setCocktail(response.data.drinks);
        console.log(cocktail);
      });
  }, []);

  const filteredDrinks = cocktail.filter(
    (ingredient) => ingredient.strIngredient1 === "Tequila"
  );
  console.log(filteredDrinks);

  const info = filteredDrinks.map(
    ({
      strDrink: drink,
      strInstructions: instructions,
      strIngredient1: ingredient
    }) => ({
      drink,
      instructions,
      ingredient
    })
  );

  return (
    <div className="App">
      <h1>Margarita with Tequila Cocktail Recipes</h1>
      {info.map(({ drink, instructions, ingredient }) => {
        return (
          <span>
            <h3 className="drinkfont">Drink: {drink}</h3>
            <h5 className="recipefont">Instructions: {instructions}</h5>
            <h5 className="recipefont">Main Ingredient: {ingredient}</h5>
          </span>
        );
      })}
    </div>
  );
}
