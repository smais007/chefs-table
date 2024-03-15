import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Header/Hero/Hero";
import Recipe from "./components/Recipes/Recipe";
import Recipes from "./components/Recipes/Recipes";

function App() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Recipes></Recipes>
      <Recipe></Recipe>
    </>
  );
}

export default App;
