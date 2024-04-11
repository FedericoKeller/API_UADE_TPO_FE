import { List } from "@/types/list.model";

export type AuthUser = {
    id: string;
    email: string;
    role: 'ADMIN' | 'USER';
    lists: List[];
  };
  
  export type UserResponse = {
    jwt: string;
    user: AuthUser;
  };