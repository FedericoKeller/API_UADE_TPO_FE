import { api } from "@/lib/api-client";

import { AuthUser } from "../types";
import { USER } from "@/config";

export const getUser = (): Promise<AuthUser> => {
  return api.get("/user");
  // return new Promise((resolve) => {
  //     resolve(USER);
  // })
};
