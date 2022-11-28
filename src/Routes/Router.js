import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import AddAProuducts from "../Pages/Dashboard/AddAProducts/AddAProuducts";
import Allusers from "../Pages/Dashboard/AllUsers/AllUsers";
import MyBooking from "../Pages/Dashboard/MyBooking/MyBooking";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Login/Signup";
import Products from "../Pages/Products/Products";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/category/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
        element: (
          <PrivateRoute>
            <Products></Products>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <MyBooking></MyBooking>,
      },
      {
        path: "/dashboard/allusers",
        element: (
          <AdminRoute>
            <Allusers></Allusers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/addproduct",
        element: (
          <AdminRoute>
            <AddAProuducts></AddAProuducts>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
