import { useEffect, useState } from "react";

export const useToken = (email) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    fetch(`https://final-project-server-nine.vercel.app/jwt?email=${email}`)
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
