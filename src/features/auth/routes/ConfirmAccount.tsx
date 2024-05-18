import { Navigate, useParams } from "react-router-dom";
import { confirmAccount } from "../api/confirmAccount";
import { useEffect } from "react";

export const ConfirmAccount = () => {
  const { token } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      await confirmAccount({ token: token as string });
    };
    fetchData();
  }, [token]);

  return <Navigate to="/auth/login"></Navigate>;
};
