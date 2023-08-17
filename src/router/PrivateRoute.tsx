import React, { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const PrivateRoute: React.FC<PropsWithChildren> = ({ children }) => {
  const user = useSelector((state: any) => state.mainState);
  return (
    <div>{user ? <div>{children}</div> : <Navigate to="/" />}</div>
  );
};

export default PrivateRoute;
