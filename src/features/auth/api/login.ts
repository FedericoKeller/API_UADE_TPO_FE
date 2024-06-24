import { api } from "@/lib/api-client";

import { UserResponse } from "../types";

export type LoginCredentialsDTO = {
  email: string;
  password: string;
};

export const loginWithEmailAndPassword = (
  data: LoginCredentialsDTO
): Promise<UserResponse> => {
  return api.post("/auth/login", data);
};
