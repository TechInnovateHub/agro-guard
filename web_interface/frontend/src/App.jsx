import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Navbar, Sidebar } from "./components";
import {
  Community,
  Dashboard,
  Forecasts,
  Interface,
  Reports,
  Schedules,
  Settings,
} from "./pages";

function App() {
  const Layout = () => {
    return (
      <main className="w-full ">
        <Navbar />
        <div className="flex">
          <div className="">
            <Sidebar />
          </div>
          <div className="w-full overflow-x-hidden px-5">
            <Outlet />
          </div>
        </div>
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
