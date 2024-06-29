import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import AdminLayout from "./pages/AdminLayout";
import AdminHouses from "./pages/AdminHouses";
import Addhouse from "./components/admin/Addhouses";
import store from "./store/store";
import { Provider } from "react-redux";
import Buy from "./pages/Buy";
import Rent from "./pages/Rent";
import Agents from "./pages/Agents";
import Signup from "./components/client/Signup";
import Login from "./components/client/Login";
import Housedetail from "./pages/Housedetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "buy", element: <Buy /> },
      { path: "housedetails/:id", element: <Housedetail /> },
      { path: "signup", element: <Signup /> },
      { path: "login", element: <Login /> },
      { path: "rent", element: <Rent /> },
      {
        path: "admin",
        element: <AdminLayout />,
        children: [
          { index: true, element: <Admin /> },
          {
            path: "houses",
            element: <AdminHouses />,
            children: [
              { path: "new", element: <Addhouse /> },
              { path: "edit/:id", element: <Addhouse /> },
            ],
          },
          { path: "agents", element: <Agents /> },
        ],
      },
    ],
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
