import { MdNotifications } from "react-icons/md";
import { Link } from "react-router-dom";

import { UserButton } from "@clerk/clerk-react";


const Navbar = () => {
  return (
    <nav className="w-full px-10 py-5 fixed top-0 bg-sidebar-bg z-30 flex items-center justify-between shadow-xl">
      <Link className="text-3xl font-bold text-green-text-clr ">AGRO GUARD</Link>

      <div className="flex items-center gap-5 text-xl">
        <div className="relative cursor-pointer">
          <MdNotifications />
          <div className="w-2 h-2 rounded-full bg-green-text-clr absolute top-0 right-0" />
        </div>

        <div className="relative cursor-pointer">
        <UserButton />
          <div className="w-2 h-2 rounded-full bg-green-text-clr absolute top-0 right-0" />
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
