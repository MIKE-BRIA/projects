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

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "buy", element: <Buy /> },
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
