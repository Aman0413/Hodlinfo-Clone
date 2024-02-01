import "./App.css";
import { GoTriangleDown } from "react-icons/go";
import { IoMdTimer } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
import { FaToggleOn } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";
import axios from "./utils/axiosClient";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";

function App() {
  const [ticker, setTicker] = useState([]);
  const fetchData = async () => {
    try {
      const res = await axios.get("getTickers");
      setTicker(res.data.data);
    } catch (error) {
      console.log("Error in fetching data from API ", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="bg-primary">
      {ticker.length === 0 && <Loader />}

      <div className="px-8 py-10 bg-primary">
        {/* Header */}
        <div>
          <div className="flex justify-between flex-wrap">
            <h1 className=" text-5xl uppercase text-secondary -tracking-tighter ">
              Hodlinfo
            </h1>
            <div className="flex  items-center gap-3">
              <button className="uppercase text-white bg-primary-light flex items-center py-1 px-3 rounded-lg">
                INR
                <GoTriangleDown />
              </button>
              <button className="uppercase text-white bg-primary-light flex items-center py-1 px-3 rounded-lg">
                btc
                <GoTriangleDown />
              </button>
              <button className="uppercase text-white bg-primary-light flex items-center py-1 px-4 rounded-lg">
                buy btc
              </button>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-3xl text-white">
                <IoMdTimer />
              </div>
              <button className=" text-white bg-secondary flex justify-center  gap-1 items-center px-3 py-2 rounded-md ">
                <FaTelegramPlane className="text-xl" />
                Connect Telegram
              </button>
              <button className="text-4xl text-white">
                <FaToggleOn />
              </button>
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <h2 className="text-3xl font-thin  text-text-primary">
              Best Price to Trade
            </h2>
          </div>

          {/* price body */}

          <div className="flex justify-between mx-10 my-10 flex-wrap">
            <div className="flex flex-col text-white text-center gap-2">
              <span className="text-secondary text-4xl font-normal">
                0.49 %
              </span>
              <span className="text-text-primary font-thin text-xl">
                5 Mins
              </span>
            </div>
            <div className="flex flex-col text-white text-center gap-2">
              <span className="text-secondary text-4xl font-normal">
                1.17 %
              </span>
              <span className="text-text-primary font-thin text-xl">
                5 Hour
              </span>
            </div>
            <div className="text-white flex items-center text-7xl justify-center">
              <FaIndianRupeeSign className="" />
              {ticker && ticker[0] && ticker[0].last}
            </div>
            <div className="flex flex-col text-white text-center gap-2">
              <span className="text-secondary text-4xl font-normal">
                4.85 %
              </span>
              <span className="text-text-primary font-thin text-xl">1 Day</span>
            </div>
            <div className="flex flex-col text-white text-center gap-2">
              <span className="text-secondary text-4xl font-normal">
                6.95 %
              </span>
              <span className="text-text-primary font-thin text-xl">
                1 Days
              </span>
            </div>
          </div>

          <div className="text-text-primary font-thin text-center">
            Average BTC/INR net price including commission
          </div>

          {/* Table */}

          <table className="w-full h-full my-10">
            <thead className="bg-primary text-2xl">
              <tr>
                <th className=" w-[10%] py-4 px-6 text-left text-text-primary font-normal ">
                  #
                </th>
                <th className="w-[15%] py-4 px-6 text-left text-text-primary font-normal ">
                  Platform
                </th>
                <th className="w-[20%] py-4 px-6 text-left text-text-primary font-normal ">
                  Last Traded Price
                </th>
                <th className="w-[30%] py-4 px-6 text-left text-text-primary font-normal ">
                  Buy / Sell Price
                </th>
                <th className="w-[15%] py-4 px-6 text-left text-text-primary font-normal ">
                  Difference
                </th>
                <th className="w-[20%] py-4 px-6 text-left text-text-primary font-normal ">
                  Savings
                </th>
              </tr>
            </thead>

            <tbody className="text-white text-2xl ">
              {ticker &&
                ticker.map((item, index) => {
                  return (
                    <tr
                      key={index}
                      className="rounded-lg border-b-[0.5px] border-text-primary bg-primary-light border-separate hover:bg-primary transition-all ease-in-out duration-300 cursor-pointer"
                    >
                      <td className="py-4 px-6 ">{index + 1}</td>
                      <td className="py-4 px-6 ">{item.name}</td>
                      <td className="py-4 px-6 ">
                        ₹<span> {item.last}</span>
                      </td>
                      <td className="py-4 px-6  ">
                        ₹ {item.buy} / ₹ {item.sell}
                      </td>
                      <td
                        className={`py-4 px-6 ${
                          ((item.buy - item.sell) / item.sell) * 100 < 0
                            ? "text-red-500"
                            : "text-white"
                        } `}
                      >
                        {(((item.buy - item.sell) / item.sell) * 100).toFixed(
                          2
                        )}{" "}
                        %
                      </td>
                      <td
                        className={`py-4 px-6 ${
                          ((item.buy - item.sell) * item.volume).toFixed(2) < 0
                            ? "text-red-500"
                            : "text-green-500"
                        }`}
                      >
                        {((item.buy - item.sell) * item.volume).toFixed(2) <
                        0 ? (
                          <span className="text-red-500">▼</span>
                        ) : (
                          <span className="text-green-500">▲</span>
                        )}
                        {((item.buy - item.sell) * item.volume).toFixed(2)}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="bg-primary text-text-primary font-thin text-xs flex items-center justify-between p-3 pb-4 border-t-[0.5px] border-text-primary mb-12">
          <div>
            Copyright © 2024 <span className="ml-4">HodlInfo.com</span>
          </div>
          <div>Support</div>
        </div>
      </div>
      {/* Fixed Element */}
      <div className="z-10 bg-primary fixed bottom-0 w-full p-2 text-white text-center">
        <button className="text-xl text-[#14a2b8] font-thin border border-[#14a2b8] rounded-md px-4 py-1 hover:bg-[#14a2b8] hover:text-white transition-all ease-in-out duration-300 ">
          Add hodlinfo to home screen
        </button>
      </div>
    </div>
  );
}

export default App;
