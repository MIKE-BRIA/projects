import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Signup from "./components/Signup";
import Login from "./components/Login";
import AdminProducts from "./components/AdminProducts";
import AdminDashboard from "./components/AdminDashboard";
import AdminOrders from "./components/AdminOrders";
import AddProduct from "./components/AddProduct";
import Shop from "./pages/Shop";
import ProductPage from "./components/ProductPage";
import ProductCategory from "./components/ProductCategory";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "signup", element: <Signup /> },
      { path: "login", element: <Login /> },
      { path: "shop", element: <Shop /> },
      { path: "profile", element: <Profile /> },
      { path: "shop/:category", element: <ProductCategory /> },
      { path: "shop/:category/:id", element: <ProductPage /> },

      {
        path: "admin",
        element: <Admin />,
        children: [
          { path: "dashboard", element: <AdminDashboard /> },
          { path: "products", element: <AdminProducts /> },
          { path: "products/add", element: <AddProduct /> },
          { path: "products/edit/:id", element: <AddProduct /> },
          { path: "orders", element: <AdminOrders /> },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
