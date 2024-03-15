import { IoMdSearch } from "react-icons/io";
import { LiaUserCircleSolid } from "react-icons/lia";
const Header = () => {
  return (
    <div>
      <div className="container max-w-[82.5rem] mx-auto flex justify-between bg-red-200">
        <h1>Recipe Calories</h1>
        <div>
          <li className="list-none flex justify-between gap-5">
            <ul>
              <a href="#">Home</a>
            </ul>
            <ul>
              <a href="#">Recipes</a>
            </ul>
            <ul>
              <a href="#">About</a>
            </ul>
            <ul>
              <a href="#">Blog</a>
            </ul>
          </li>
        </div>
        <div className="flex justify-between">
          <input type="text" />
          <IoMdSearch />
        </div>
        <div>
          <LiaUserCircleSolid />
        </div>
      </div>
    </div>
  );
};

export default Header;
