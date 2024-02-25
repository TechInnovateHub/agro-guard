import { Tasks } from "../data";
import { Financial, Weather } from "../components/dasboardComponents";
import { MdArrowOutward } from "react-icons/md";
import { FaBatteryFull } from "react-icons/fa";
import { Link } from "react-router-dom";



const Dashboard = () => {
  return (
    <section className="main-container grid grid-cols-3 gap-6 ">
      <div className="col-span-3 md:col-span-2 flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-green-text-clr">
          Welcome, Victor! Here&apos;s Your Dashboard
        </h1>
        <Weather />
      </div>

      <div className="col-span-3 md:col-span-1 flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-light-text-clr">
            Scheduled Tasks
          </h2>
          {Tasks.map((task) => (
            <div
              key={task.id}
              className="bg-button-bg rounded-lg flex items-center justify-between overflow-hidden pl-4"
            >
              <div className="flex flex-col">
                <div className="text-red-text-clr text-xl font-bold">
                  {task.days} days left
                </div>
                <div className="text-sm">
                  Scheduled checking was not performed.
                </div>
              </div>
              <Link
                to="/schedules"
                className="hover:bg-hover-bg flex items-center justify-center py-6 "
              >
                <MdArrowOutward className="text-4xl text-light-text-clr cursor-pointer rounded-lg" />
              </Link>
            </div>
          ))}
        </div>

        <div className="bg-sidebar-bg rounded-lg p-6 flex flex-col gap-6">
          <h2 className="text-xl font-bold text-light-text-clr">
            Robot Status
          </h2>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="font-semibold">Current Status:</span>
              <span className="text-red-text-clr">OFF</span>
            </div>
            <div className="flex items-center gap-2">
              <FaBatteryFull className="text-2xl text-green-text-clr" />
              <span>100%</span>
            </div>
          </div>
          <button className="bg-hover-bg text-text-clr py-2 px-4 rounded-md">
            TURN ON
          </button>
          <Link
            to="/interface"
            className="bg-hover-bg text-text-clr py-2 px-4 rounded-md text-center"
          >
            VIEW CAMERA
          </Link>
        </div>
      </div>

      <div className="col-span-3 flex flex-col gap-6">
        <Financial />
      </div>
      
    </section>
  );
};

export default Dashboard;
