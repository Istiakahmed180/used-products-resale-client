import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ProductsForCategory from "../Pages/Home/CategoriesProduct/ProductsForCategory";
import Home from "../Pages/Home/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.id}`),
        element: <ProductsForCategory></ProductsForCategory>,
      },
    ],
  },
]);

export default router;
