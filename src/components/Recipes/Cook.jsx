import React, { useState } from "react";
import { toast } from "sonner";

const Cook = ({ carts, setCarts }) => {
  const [currentlyCooking, setCurrentlyCooking] = useState([]);

  const uniqueCarts = carts.filter((item, index) => {
    return (
      carts.findIndex((cart) => cart.recipe_name === item.recipe_name) === index
    );
  });

  console.log(currentlyCooking);

  const cookItem = (item) => {
    console.log(carts);

    setCarts(carts.filter((nod) => nod.recipe_id !== item.recipe_id)); // removing from Carts

    setCurrentlyCooking([...currentlyCooking, item]); // Adding the removed item to Current Cooking list

    toast.success(`${item.recipe_name} added to cooking`);

    // Filter out the item being cooked from uniqueCarts
    // setUniqueCart((prevUniqueCarts) =>
    //   prevUniqueCarts.filter((cartItem) => cartItem !== item)
    // );
  };

  return (
    <div className="pb-10">
      <div>
        <div>
          <h1 className="mt-8 font-semibold text-2xl pb-4 text-center">
            Want to cook: {uniqueCarts.length}
          </h1>
          <hr className=" mx-[82px] mb-6" />
        </div>
        <div className="">
          <table>
            <thead>
              <tr className="flex pb-4">
                <th></th>
                <th className="pl-[56px]">Name</th>
                <th className="pl-[100px]">Time</th>
                <th className="pl-[52px]">Calories</th>
                <th className="pl-[30px]">Status</th>
              </tr>
            </thead>
            <tbody>
              {/* Map over uniqueCarts to render each item */}
              {uniqueCarts.map((item, index) => (
                <tr
                  key={index}
                  className="flex gap-[23px] items-center text-left text-[#282828B2] bg-[#28282808] px-6 py-4 w-ful"
                >
                  <td className="font-semibold">{index + 1}.</td>
                  <td>{item.recipe_name}</td>
                  <td>{item.preparing_time}</td>
                  <td>{item.calories}</td>
                  <td>
                    <button id="preparing-btn" onClick={() => cookItem(item)}>
                      Preparing
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <div>
          <h1 className="mt-8 font-semibold text-2xl pb-4 text-center">
            Currently cooking: {currentlyCooking.length}
          </h1>
          <hr className=" mx-[82px] mb-6" />
        </div>
        <div className="">
          <table>
            <thead>
              <tr className="flex pb-4">
                <th></th>
                <th className="pl-[56px]">Name</th>
                <th className="pl-[149px]">Time</th>
                <th className="pl-[85px]">Calories</th>
              </tr>
            </thead>
            <tbody>
              {/* Map over currentlyCooking to render each cooking item */}
              {currentlyCooking.map((item, index) => (
                <tr
                  key={index}
                  className="flex gap-[42px] items-center text-left text-[#282828B2] bg-[#28282808] px-6 py-5"
                >
                  <td className="font-semibold">{index + 1}.</td>
                  <td>{item.recipe_name}</td>
                  <td>{item.preparing_time}</td>
                  <td>{item.calories}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex justify-end gap-5 px-6 font-medium text-[#282828CC] leading-6">
          <h1 className="text-left">
            Total Time <br /> <span>40</span> Min
          </h1>
          <h1 className="text-left">
            Total Calories <br /> <span>300</span> Calories
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Cook;
