import { IconComponents, IconDashboard } from "@tabler/icons-react";
import { NavItem } from "@/types/nav-item";

export const navLinks: NavItem[] = [
  { label: "Bienvenido", icon: IconDashboard, to: "/app/welcome" },

  {
    label: "Listas",
    icon: IconComponents,
    initiallyOpened: true,
    to: "/app/lists",
  },
];
