import Banner from "../../../assets/images/Banner.png";
const Hero = () => {
  return (
    <div className="container max-w-[82.5rem] mx-auto">
      <div className="relative">
        <img src={Banner} alt="" />
        <div className="absolute top-1/2">
          <div className="text-center text-white">
            <h1>Discover an exceptional cooking class tailored for you!</h1>
            <p>
              Learn and Master Basic Programming, Data Structures, Algorithm,
              OOP, Database and solve 500+ coding problems to become an
              exceptionally well world-class Programmer.
            </p>
          </div>
          <div className="flex justify-center gap-4">
            <button className="bg-red-400">Explor Now</button>
            <button className="bg-green-400">Our Feedback</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
