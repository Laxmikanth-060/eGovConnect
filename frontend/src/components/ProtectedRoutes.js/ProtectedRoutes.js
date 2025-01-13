import React, { useContext, useState, useEffect } from "react";
import { Navigate, useParams, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext.js";
import Loader from "../components/utils/Loader/Loader.js";

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useContext(UserContext);
    const navigate = useNavigate();
    if (loading) {
      return <Loader />;
    }
  
    if (!user) {
      return <Navigate to="/login" replace />;
    }
    return children;
  };
  

  const SuperAdminRoute = ({ children }) => {
    const { user, loading } = useContext(UserContext);
    if (loading) {
      return <Loader />;
    }
    if (!user) {
      return <Navigate to="/login" replace />;
    }
    if (user.isSuperAdmin === false) {
      return <Navigate to="/not-authorized" />;
    }
    return children;
  };

  export { ProtectedRoute, SuperAdminRoute};