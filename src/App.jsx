import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Header/Hero/Hero";
import Cook from "./components/Recipes/Cook";
import Recipes from "./components/Recipes/Recipes";

import { Toaster } from "sonner";
import Footer from "./components/Footer/Footer";

function App() {
  const [carts, setCarts] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const handleItemSelect = ({ recipe }) => {
    // console.log(recipe);
    setCarts((c) => [...c, recipe]);
    setShowToast(true);
  };

  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <div className="container max-w-[82.5rem] mx-auto">
        <div className="text-center mt-24">
          <h1 className="text-[#150B2B] font-semibold text-[40px] pb-6">
            Our Recipes
          </h1>
          <p className="text-[#150B2B99] w-screen md:w-[51.438rem]  lg:w-[51.438rem] inline-flex justify-center leading-6 pb-12">
            Our team of seasoned chefs, each a virtuoso in their domain, craft
            culinary wonders that push the boundaries of creativity. Our chefs,
            true culinary maestros, meticulously curate each dish, blending
            traditional techniques with innovative twists to present a menu that
            celebrates the essence of fine dining.
          </p>
        </div>

        <div className="flex flex-col-reverse gap-10 md:gap-0 lg:gap-0 md:flex-row lg:flex-row justify-between w-full">
          <div className="w-2/3">
            <Recipes handleItemSelect={handleItemSelect}></Recipes>
          </div>

          <div className="rounded-2xl border h-fit w-[379px] md:w-auot lg:w-auto">
            <Cook carts={carts} setCarts={setCarts}></Cook>
          </div>
        </div>
      </div>
      <Footer></Footer>

      <Toaster position="bottom-center" />
    </>
  );
}

export default App;
