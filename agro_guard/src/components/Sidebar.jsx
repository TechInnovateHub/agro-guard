import { NavLink } from "react-router-dom";
import { Links } from "../data";
import { MdArrowForward } from "react-icons/md";

const sidebar = () => {
  const activeLink =
    "flex items-center gap-4 pl-4 pt-3 pb-2.5 rounded-lg text-text-clr text-md m-2 bg-hover-bg";

  const normalLink =
    // TODO: remember to change the color of the text in dark theme back to :-
    "flex items-center gap-4 pl-4 pt-3 pb-2.5 rounded-lg text-md  m-2 hover:bg-hover-bg";

  return (
    <section className="flex flex-col bg-sidebar-bg w-[250px] px-4 py-5 sticky left-0 top-0 overflow-y-scroll min-h-screen pt-24">
      <button className="flex justify-end">
        <MdArrowForward className=" text-3xl bg-hover-bg  rounded-lg text-light-text-clr"/>
      </button>
      <div>
        {Links.map((link) => (
          <NavLink
            to={`/${link.name}`}
            key={link.name}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <span>{link.icon}</span>
            {link.name}
          </NavLink>
        ))}
      </div>
    </section>
  );
};

export default sidebar;
