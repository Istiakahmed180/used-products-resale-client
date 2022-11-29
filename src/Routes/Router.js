import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import AddAProuducts from "../Pages/Dashboard/AddAProducts/AddAProuducts";
import AllByers from "../Pages/Dashboard/AllByers/AllByers";
import AllSellers from "../Pages/Dashboard/AllSellers/AllSellers";
import Allusers from "../Pages/Dashboard/AllUsers/AllUsers";
import MyBooking from "../Pages/Dashboard/MyBooking/MyBooking";
import MyProducts from "../Pages/Dashboard/MyProducts/MyProducts";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Login/Signup";
import Payment from "../Pages/Payment/Payment";
import Products from "../Pages/Products/Products";
import AdminRoute from "./AdminRoute";
import ByerRoute from "./ByerRoute";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoute";

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
        path: "/dashboard/mybooking",
        element: <MyBooking></MyBooking>,
      },
      {
        path: "/dashboard/payment",
        element: <Payment></Payment>,
      },
      {
        path: "/dashboard/mybooking",
        element: (
          <ByerRoute>
            <MyBooking></MyBooking>
          </ByerRoute>
        ),
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
        path: "/dashboard/allsellers",
        element: (
          <AdminRoute>
            <AllSellers></AllSellers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allbyers",
        element: (
          <AdminRoute>
            <AllByers></AllByers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/addproduct",
        element: (
          <SellerRoute>
            <AddAProuducts></AddAProuducts>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/myproducts",
        element: (
          <SellerRoute>
            {" "}
            <MyProducts></MyProducts>
          </SellerRoute>
        ),
      },
    ],
  },
]);

export default router;
