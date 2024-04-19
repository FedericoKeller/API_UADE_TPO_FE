import { AuthUser } from "@/features/auth";

export const USER: AuthUser = {
  id: "123",
  email: "test@test.com",
  role: "USER",
  lists: [
    {
      id: 1,
      title: "Por ver",
      films: [],
      canDelete: false,
    },
    {
      id: 2,
      title: "Preferidas",
      films: [],
      canDelete: false,
    },
    {
      id: 3,
      title: "Vistas",
      films: [],
      canDelete: false,
    },
  ],
};
