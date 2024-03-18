import React from "react";

import Banner from "../../../assets/images/Banner.png";
const Hero = () => {
  return (
    <div className="container max-w-[82.5rem] mx-auto">
      <div className="relative">
        <img className=" h-screen md:h-full lg:h-full" src={Banner} alt="" />
        {/* <div>
          <video autoPlay muted loop>
            <source src={Banner} type="video/mp4" />
          </video>
        </div> */}
        <div className="absolute top-1/4 md:top-[130px] md:left-[12.125rem] lg:top-[130px] lg:left-[12.125rem]">
          <div className="text-center text-white pb-10">
            <h1 className="font-bold text-[1.5rem] md:text-[2.5rem] lg:text-[3.25rem] pb-6">
              Discover an exceptional cooking <br />
              class tailored for you!
            </h1>
            <p className="text-lg leading-7 lg:w-[58rem]">
              Welcome to Grand Restaurant, where gastronomy meets artistry and
              every meal is a symphony of flavors.
            </p>
          </div>
          <div className=" justify-center gap-4  flex  flex-col md:flex-row lg:flex-row">
            <button className="bg-[#0BE58A] text-[#150B2B] font-semibold text-xl px-[1.875rem] py-4 rounded-[3.125rem]">
              Explor Now
            </button>
            <button className="bg-none border text-white font-semibold text-xl px-[1.875rem] py-4 rounded-[3.125rem]">
              Our Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
