import { IoMdSunny } from "react-icons/io";
import { FaCloudSunRain } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const Weather = () => {
  return (
    <div className="mt-5 flex flex-col gap-3">
      <div className="bg-button-bg px-4 py-2 rounded-lg flex flex-col gap-2">
        <div className="text-light-text-clr font-semibold flex flex-col gap-2">
          <span>WEATHER TODAY </span>
          <p className="text-text-clr flex gap-3 items-baseline">
            <span>MONDAY</span>
            <span className="text-light-text-clr text-xs">
              29ᵗʰ January 2023
            </span>
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <IoMdSunny className="text-7xl text-yellow-500" />
          <p className="flex flex-col gap-1">
            <span className="text-5xl">20°C</span>
            <span>4:39 PM</span>
          </p>
        </div>
      </div>
      {/*  */}
      <div className=" rounded-lg flex flex-col gap-3 w-full">

        <span className="bg-button-bg w-full font-bold text-light-text-clr rounded-md flex items-center justify-between overflow-hidden">
          <span className="ml-4">WEATHER FORECAST</span>
          <Link to="/forecasts">
            <MdArrowOutward className="text-5xl text-light-text-clr cursor-pointer hover:bg-hover-bg p-2" />
          </Link>
        </span>

        <div className=" flex gap-5 bg-button-bg px-4 py-5 rounded-md">
          <div className="text-light-text-clr font-semibold flex flex-col gap-2 ">
            <p className="text-text-clr flex flex-col gap-3 items-baseline">
              <span>TOMMOROW</span>
              <span className="text-light-text-clr text-xs">
                30ᵗʰ January 2023
              </span>
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <FaCloudSunRain className="text-7xl " />
            <p className="flex flex-col gap-1">
              <span className="text-5xl">20°C</span>
              <span>4:39 PM</span>
            </p>
          </div>
        </div>

        <div className=" flex gap-5 bg-button-bg px-4 py-5 rounded-md">
          <div className="text-light-text-clr font-semibold flex flex-col gap-2 ">
            <p className="text-text-clr flex flex-col gap-3 items-baseline">
              {/* <span>TOMMOROW</span> */}
              <span className="text-light-text-clr text-xs">
                1ˢᵗ February 2023
              </span>
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <FaCloudSunRain className="text-7xl " />
            <p className="flex flex-col gap-1">
              <span className="text-5xl">19°C</span>
              <span>4:39 PM</span>
            </p>
          </div>
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default Weather;
