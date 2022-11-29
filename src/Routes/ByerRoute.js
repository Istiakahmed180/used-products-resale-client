import React, { useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../Components/Spinner/Spinner";
import { AuthContext } from "../Context/AuthProvider";

const ByerRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [byerLoading, setByerLoading] = useState(true);
  const [isByer, setIsByer] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:5000/users/byer/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIsByer(data.isByer);
        setByerLoading(false);
      });
  }, [user?.email]);

  const location = useLocation();

  if (loading || byerLoading) {
    return <Spinner></Spinner>;
  }

  if (user && isByer) {
    return children;
  }
  return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};

export default ByerRoute;
