import { HeaderSearchItem } from "@/features/misc/components/Header/types/header";
import { useLogout, useUser } from "@/lib/auth";
import { queryClient } from "@/lib/react-query";
import { IconLogin, IconDashboard, IconLogout } from "@tabler/icons-react";
import { useQuery } from "@tanstack/react-query";

export const useNavActions = () => {
  const logout = useLogout();
  const user = useUser();

  const onLogoutClick = () => {
    console.log('hola');
    logout.mutate({});
  };

  const PUBLIC_ACTIONS:  HeaderSearchItem[] = [
    {
      to: "/auth/login",
      label: "Iniciar sesión",
      type: "link",
      icon: IconLogin,
    },
  ];

  const PROTECTED_ACTIONS: HeaderSearchItem[] = [
    {
      to: "/app/welcome",
      label: "Dashboard",
      type: "link",
      icon: IconDashboard,
    },
    {
      label: "Cerrar sesión",
      type: "button",
      onClick: onLogoutClick,
      icon: IconLogout,
    },
  ];

  const actions = user?.data ? PROTECTED_ACTIONS : PUBLIC_ACTIONS;

  return actions;
};
