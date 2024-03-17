import { useEffect, useState } from "react";
import Recipe from "./Recipe";
import Cook from "./Cook";

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="container max-w-[82.5rem] mx-auto">
      <div className="text-center">
        <h1>Our Recipes: {recipes.length}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
          vulputate netus pharetra rhoncus. Eget urna volutpat curabitur
          elementum mauris aenean neque.
        </p>
        <div className="flex">
          <div className="w-2/3 grid grid-cols-2 gap-6 ">
            {recipes.map((recipe) => (
              <Recipe key={recipe.recipe_id} recipe={recipe}>
                {" "}
              </Recipe>
            ))}
          </div>
          <div className="w-[514px]  rounded-2xl border h-fit">
            <Cook></Cook>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recipes;
