/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Recipe from "./Recipe";

function Recipes({ handleItemSelect }) {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="container max-w-[82.5rem] mx-auto">
      <div className="text-center">

        <div className="flex">
          <div className=" grid grid-cols-2 gap-6 ">
            {recipes.map((recipe) => (
              <Recipe
                handleItemSelect={handleItemSelect}
                key={recipe.recipe_id}
                recipe={recipe}
                
              ></Recipe>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recipes;
