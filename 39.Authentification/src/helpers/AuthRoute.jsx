import React, { useContext } from "react";
import { UserContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function AuthRoute({ children }) {
  const { user } = useContext(UserContext);
  if (user) return children;
  else if (user === null) return <h1>Loadding...</h1>;
  else if (user === false) {
    return <Navigate to={"/auth/login"} />;
  }
}
