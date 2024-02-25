import { MdLogout, MdNotifications, MdPerson } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full px-10 py-5 fixed top-0 bg-sidebar-bg z-30 flex items-center justify-between shadow-xl">
      <Link className="text-3xl font-bold text-green-text-clr ">AGRO GUARD</Link>

      <div className="flex items-center gap-5 text-xl">
        <p className="relative cursor-pointer">
          <MdNotifications />
          <div className="w-2 h-2 rounded-full bg-green-text-clr absolute top-0 right-0" />
        </p>

        <p className="relative cursor-pointer">
          <MdPerson />
          <div className="w-2 h-2 rounded-full bg-green-text-clr absolute top-0 right-0" />
        </p>

        <button className="flex items-center gap-2 border-2 px-4 py-2 rounded-md hover:border-green-border-clr transition-all duration-100">
          <MdLogout />
          <span>LOGOUT</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
