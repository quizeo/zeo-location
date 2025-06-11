import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./Layout/HomeLayout";
import User from "./user/pages/User";
import NewPlace from "./places/pages/NewPlace";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,

    children: [
      {
        index: true,
        element: <User />,
      },

      {
        path: "places/new",
        element: <NewPlace />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
