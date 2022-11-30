import React, { useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../Components/Spinner/Spinner";
import { AuthContext } from "../Context/AuthProvider";

const SellerRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [sellerLoading, setSellerLoading] = useState(true);
  const [isSeller, setIsSeller] = useState(false);
  useEffect(() => {
    fetch(
      `https://final-project-server-nine.vercel.app/users/seller/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIsSeller(data.isSeller);
        setSellerLoading(false);
      });
  }, [user?.email]);

  const location = useLocation();

  if (loading || sellerLoading) {
    return <Spinner></Spinner>;
  }

  if (user && isSeller) {
    return children;
  }
  return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};

export default SellerRoute;
