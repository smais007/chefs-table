import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Header/Hero/Hero";
import Cook from "./components/Recipes/Cook";
import Recipes from "./components/Recipes/Recipes";

import { Toaster } from "sonner";

function App() {
  const [carts, setCarts] = useState([]);
  const handleItemSelect = ({ recipe }) => {
    // console.log(recipe);
    setCarts((c) => [...c, recipe]);
  };

  return (
    <>
      {/* <Header></Header>
      <Hero></Hero> */}
      <div className="container max-w-[82.5rem] mx-auto">
        {/* <div className="text-center">
          <h1>Our Recipes</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
            vulputate netus pharetra rhoncus. Eget urna volutpat curabitur
            elementum mauris aenean neque.
          </p>
        </div> */}

        <div className="flex justify-between">
          <div>
            <Recipes handleItemSelect={handleItemSelect}></Recipes>
          </div>

          <div className="w-[514px]  rounded-2xl border h-fit">
            <Cook carts={carts} setCarts={setCarts}></Cook>
          </div>
        </div>
      </div>

      <Toaster />
    </>
  );
}

export default App;
