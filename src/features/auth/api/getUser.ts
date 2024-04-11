import { axios } from "@/lib/axios";

import { AuthUser } from "../types";
import { USER } from "@/config";

export const getUser = (): Promise<AuthUser> => {
  // return axios.get("/auth/me");
  return new Promise((resolve) => {
      resolve(USER);
  })
};
