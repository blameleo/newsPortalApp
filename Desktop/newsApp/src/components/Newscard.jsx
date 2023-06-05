/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from "react";
import { VscAccount, VscHeartFilled } from "react-icons/vsc";
import { IoEyeSharp } from "react-icons/io5";

const Newscard = ({ data }) => {
  const newData = data.slice(0, 8);
  console.log(newData);
  return (
    <div className="grid sm:grid-cols-2  lg:grid-cols-4 gap-10 place-items-center">
      {newData.map((item, i) => {
        return (
          <div key={i}>
            <a href={item.url} className="cursor-pointer">
              <div className="relative">
                <img
                  src={item.image}
                  alt=""
                  className="w-[400px] rounded-lg h-64 border-2 border-red-600  bg-contain"
                />
                <p className="absolute bottom-0 text-white p-3  ">
                  {item.title}
                </p>
              </div>

              <div className="flex justify-between py-3">
                <div className="flex items-center">
                  <VscAccount className="text-2xl mr-3" />
                  <h1>Leonard adjei</h1>
                </div>

                <div>
                  <div className="flex items-center  justify-between w-32">
                    <div className="flex items-center">
                      <VscHeartFilled className="mr-2 text-red-700 text-xl" />
                      <p>97</p>
                    </div>

                    <div className="flex items-center">
                      <IoEyeSharp className="mr-2 text-red-700 text-xl" />
                      <p>4.9k</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Newscard;
