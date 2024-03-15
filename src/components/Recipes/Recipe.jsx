import Beef from "../../assets/images/Beef Tacos.jpg";
import { CiClock1 } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";
const Recipe = () => {
  return (
    <div>
      <div className="w-[313px] h-[631px] p-5 border rounded-2xl">
        <img className="rounded-2xl mb-6" src={Beef} alt="" />
        <h1 className="text-[#282828] font-semibold text-xl pb-4">
          Spaghetti Bolognese
        </h1>
        <p className="text-[#878787] leading-[30px] pb-4">
          Classic Italian pasta dish with savory meat sauce.
        </p>
        <hr className="pb-6" />
        <h1 className="text-[#282828] font-medium pb-4">Ingredients: 6</h1>
        <ul className="list-disc list-inside text-[#878787] leading-8 pb-4">
          <li>500g ground beef</li>
          <li>500g ground beef</li>
          <li>500g ground beef</li>
        </ul>
        <hr className="" />
        <div className="flex justify-start gap-4 pb-6">
          <div className="flex items-center gap-2">
          <CiClock1 />
          <p className="text-[#282828CC] text-base">30 min</p>
          </div>
          <div className="flex items-center gap-2">
          <AiOutlineFire className="text-[#282828CC] text-base" />
          <p className="text-[#282828CC]">600 calories</p>
          </div>
        </div>
        <div>
          <button className="bg-[#0BE58A] px-6 py-3 rounded-[50px] text-[#150B2B] text-lg font-medium">Want to Cook</button>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
