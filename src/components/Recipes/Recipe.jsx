/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { CiClock1 } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";
const Recipe = ({ recipe, handleItemSelect }) => {
  const {
    recipe_name,
    calories,
    preparing_time,
    short_description,
    recipe_image,
    ingredients,
  } = recipe;


  return (
    <div className="">
      <div className="w-[379px] h-[685px] p-5 border rounded-2xl">
        <img
          className="rounded-2xl mb-6 h-[200px] w-full"
          src={recipe_image}
          alt=""
        />
        <h1 className="text-[#282828] text-left font-semibold text-xl pb-4">
          {recipe_name}
        </h1>
        <p className="text-[#878787] text-left leading-[30px] pb-4">
          {short_description}
        </p>
        <hr className="pb-6" />
        <h1 className=" text-left text-[#282828] font-medium pb-4">
          Ingredients: <span>{ingredients.length}</span>
        </h1>
        <div className="overflow-y-auto no-scrollbar max-h-32 pb-4">
          <ul className="text-left list-disc list-inside text-[#878787] leading-8">
            {ingredients.map((ing, index) => (
              <li key={index}>{ing}</li>
            ))}
          </ul>
        </div>
        <hr className="" />
        <div className="flex justify-start gap-4 pb-6">
          <div className="flex items-center gap-2">
            <CiClock1 />
            <p className="text-[#282828CC] text-base">
              <span>{preparing_time}</span> min
            </p>
          </div>
          <div className="flex items-center gap-2">
            <AiOutlineFire className="text-[#282828CC] text-base" />
            <p className="text-[#282828CC]">
              <span>{calories}</span> calories
            </p>
          </div>
        </div>
        <div>
          <button
            className="flex bg-[#0BE58A] px-6 py-3 rounded-[50px] text-[#150B2B] text-lg font-medium"
            onClick={() => handleItemSelect({ recipe })}
          >
            Want to Cook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
