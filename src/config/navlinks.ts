import { IconComponents, IconHome } from "@tabler/icons-react";
import { NavItem } from "@/types/nav-item";

export const navLinks: NavItem[] = [
  { label: "Bienvenido", icon: IconHome, to: "/app" },

  {
    label: "Listas",
    icon: IconComponents,
    initiallyOpened: true,
    to: "/app/lists",
  },
];
