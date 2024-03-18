import Search from "../../assets/images/search.svg";
import UserP from "../../assets/images/user.svg";

const Header = () => {
  return (
    <div>
      <div className="container max-w-[82.5rem] mx-auto flex justify-between items-center py-14">
        <h1 className="text-[#150B2B] font-bold text-3xl">Grand Restaurant</h1>
        <div>
          <li className="list-none hidden  md:flex lg:flex justify-between gap-12 text-[#150B2BB2]">
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
        <div className=" flex justify-between items-center">
          <input
            placeholder="Search"
            type="text"
            className="bg-[#150B2B0D] absolute  py-3  pl-14  rounded-[50px] hidden"
          />
          <img src={Search} alt="" className="pl-6" />
        </div>
        <div>
          <img
            className="bg-[#0BE58A] p-2 rounded-[50px] ml-4"
            src={UserP}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
