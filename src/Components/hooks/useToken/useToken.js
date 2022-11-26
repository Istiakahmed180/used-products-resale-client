import { useEffect, useState } from "react";

export const useToken = (email) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    fetch(`http://localhost:5000/jwt?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.accesToken) {
          localStorage.setItem("accessToken", data.accesToken);
          setToken(data.accesToken);
        }
      });
  }, [email]);
  return [token];
};
