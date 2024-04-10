interface Film {
  id: string;
  title: string;
  director?: string;
  year?: number;
}

interface List {
  id: number;
  title: string;
  films: Film[];
}

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