import { useState } from "react";
import { toast } from "sonner";

const Cook = ({ carts, setCarts }) => {
  let totalTime = 0;
  let totalCal = 0;
  const [currentlyCooking, setCurrentlyCooking] = useState([]);

  const uniqueCarts = carts.filter((item, index) => {
    return (
      carts.findIndex((cart) => cart.recipe_name === item.recipe_name) === index
    );
  });

  const cookItem = (item) => {
    const promise = () =>
      new Promise((resolve) =>
        setTimeout(() => resolve({ name: "Sonner" }), 1500)
      );

    setCarts(carts.filter((nod) => nod.recipe_id !== item.recipe_id));
    setCurrentlyCooking([...currentlyCooking, item]);

    toast.promise(promise, {
      loading: "Loading...",
      success: (data) => {
        return `${item.recipe_name} added to current cooking`;
      },
      error: "Error",
    });
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
                <th className="text-[#878787] pl-10 md:pl-[3.5rem]">Name</th>
                <th className="text-[#878787] pl-12 md:pl-[6.25rem]">Time</th>
                <th className="text-[#878787] pl-12 md:pl-[3.25rem]">
                  Calories
                </th>
                <th className="text-[#878787] pl-9 md:pl-[1.875rem]">Status</th>
              </tr>
            </thead>
            <tbody>
              {/* Map over uniqueCarts to render each item */}
              {uniqueCarts.map((item, index) => (
                <tr
                  key={index}
                  className="flex gap-[1.5rem] items-center  text-[#282828B2] bg-[#28282808] px-6 py-4 w-auto"
                >
                  <td className="font-semibold">{index + 1}.</td>
                  <td className="text-[#282828B2] w-16 md:w-[7rem]">
                    {item.recipe_name}
                  </td>
                  <td className="text-[#282828B2]w-10 md:w-[4.25rem]">
                    {item.preparing_time} minutes
                  </td>
                  <td className="text-[#282828B2]">{item.calories} calories</td>
                  <td>
                    <button
                      id="preparing-btn"
                      onClick={() => cookItem(item)}
                      className="text-[#150B2B] font-medium bg-[#0BE58A] px-3 md:px-[18px] rounded-[50px]"
                    >
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
              <tr className="flex pb-4  w-fit">
                <th></th>
                <th className="text-[#878787] pl-16  md:pl-[56px]">Name</th>
                <th className="text-[#878787] pl-16  md:pl-[149px]">Time</th>
                <th className="text-[#878787] pl-16  md:pl-[85px]">Calories</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              {/* Map over currentlyCooking to render each cooking item */}
              {currentlyCooking.map((item, index) => (
                <tr
                  key={index}
                  className="flex gap-[42px] items-center text-left text-[#282828B2] bg-[#28282808] px-6 py-5 w-fit"
                >
                  <td className="font-semibold">{index + 1}.</td>
                  <td className="text-[#282828B2] w-20   md:w-[149px]">
                    {item.recipe_name}
                  </td>
                  <td className="text-[#282828B2] w-[50px] md:w-[80px]">
                    {item.preparing_time} minutes
                  </td>
                  <td className="text-[#282828B2]">{item.calories} calories</td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex justify-end gap-5 px-6 font-medium text-[#282828CC] leading-6">
          <h1 className="text-left">
            {currentlyCooking.forEach((item) => {
              totalTime += Number(item.preparing_time);
            })}
            Total Time: <br /> <span>{totalTime}</span> Min
          </h1>
          <h1 className="text-left">
            {currentlyCooking.forEach((item) => {
              totalCal += Number(item.calories);
            })}
            Total Calories: <br /> <span>{totalCal}</span> Cal
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Cook;
