const Cook = () => {
  return (
    <div className="pb-10">
      <div>
        <div>
          <h1 className="mt-8 font-semibold text-2xl pb-4">
            Want ot cook : 01
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
              <tr className="flex gap-[23px] items-center text-left text-[#282828B2] bg-[#28282808] px-6 py-4 w-ful">
                <td className="font-semibold">1.</td>
                <td>Chicken Caesar Salad</td>
                <td>20 minutes </td>
                <td>400 calories</td>

                <td>
                  <button>Preparing</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <div>
          <h1 className="mt-8 font-semibold text-2xl pb-4">
            Currently cooking: 02{" "}
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
              <tr className="flex gap-[42px] items-center text-left text-[#282828B2] bg-[#28282808] px-6 py-5">
                <td className="font-semibold">1.</td>
                <td>Chicken Caesar Salad</td>
                <td>20 minutes </td>
                <td>400 calories</td>

              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex justify-end gap-5 px-6 font-medium text-[#282828CC] leading-6">
          <h1 className="text-left">
            Total Time <br /> <span>45</span> Min
          </h1>
          <h1 className="text-left">
            Total Carlories <br /> <span>300</span> carlories
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Cook;
