export type AuthUser = {
    id: string;
    email: string;
    role: 'ADMIN' | 'USER';
  };
  
  export type UserResponse = {
    jwt: string;
    user: AuthUser;
  };