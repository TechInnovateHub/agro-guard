import "./App.css";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navbar, Sidebar } from "./components";

import Dashboard from "../src/pages/Dashboard";
import Reports from "../src/pages/Reports";
import Community from "../src/pages/Community";
import Interface from "../src/pages/Interface";
import Schedules from "../src/pages/Schedules";
import Forecasts from "../src/pages/Forecasts";
import Settings from "../src/pages/Settings";

import {
  RedirectToSignIn,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";



function App() {
  const Layout = () => {
    return (
      <main className="w-full ">


        <SignedIn>
          <Navbar />
          <div className="flex">
            <div className="">
              <Sidebar />
            </div>
            <div className="w-full overflow-x-hidden px-5">
              <Outlet />
            </div>
          </div>
        </SignedIn>

        <SignedOut>
        <RedirectToSignIn />
        </SignedOut>

        {/* <Footer /> */}
      </main>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/reports",
          element: <Reports />,
        },
        {
          path: "/community",
          element: <Community />,
        },
        {
          path: "/interface",
          element: <Interface />,
        },
        {
          path: "/schedules",
          element: <Schedules />,
        },
        {
          path: "/forecasts",
          element: <Forecasts />,
        },
        {
          path: "/settings",
          element: <Settings />,
        },
      ],
    },
    // {
    //   path: "/login",
    //   element: <Login />
    // }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
