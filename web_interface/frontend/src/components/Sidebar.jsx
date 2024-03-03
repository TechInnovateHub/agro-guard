import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Links } from "../data";
import { MdArrowForward } from "react-icons/md";
import { useMediaQuery } from "react-responsive";

const Sidebar = () => {
  const [showIcons, setShowIcons] = useState(false);

  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  useEffect(() => {
    setShowIcons(false); // Reset showIcons state when switching to desktop view
  }, [isMobile]); // Trigger effect when the screen size changes

  const toggleIcons = () => {
    setShowIcons(!showIcons);
  };

  const activeLink =
    "flex items-center gap-4 px-4 pt-3 pb-2.5 rounded-lg text-text-clr text-md m-2 bg-hover-bg";

  const normalLink =
    "flex items-center gap-4 px-4 pt-3 pb-2.5 rounded-lg text-md m-2 hover:bg-hover-bg";

  return (
    <section className="flex flex-col bg-sidebar-bg lg:w-[250px] px-2 py-5 sticky left-0 top-0 overflow-y-scroll min-h-screen pt-24">
      {isMobile && ( // Render arrow button only on mobile
        <button
          className="flex justify-center md:justify-end lg:hidden"
          onClick={toggleIcons}
        >
          <MdArrowForward className="text-3xl bg-hover-bg rounded-lg text-light-text-clr" />
        </button>
      )}

      <div className="flex flex-col">
        {Links.map((link) => (
          <NavLink
            to={`/${link.name}`}
            key={link.name}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            {isMobile ? (
              showIcons ? (
                <div className="flex items-center justify-center gap-3 text-lg">
                  <span>{link.icon}</span>
                  {link.name}
                </div>
              ) : (
                <>
                  <span className="text-2xl">{link.icon}</span>
                  {/* {link.name} */}
                </>
              )
            ) : (
              <>
                <div className="flex items-center justify-center gap-3 text-lg">
                  <span>{link.icon}</span>
                  {link.name}
                </div>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </section>
  );
};

export default Sidebar;
