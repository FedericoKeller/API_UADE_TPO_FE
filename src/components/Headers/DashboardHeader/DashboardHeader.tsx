"use client";

import { ActionIcon, Box, Drawer, Stack, Tooltip } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconLogout, IconSettings } from "@tabler/icons-react";
import "./DashboardHeader.scss";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { Logo } from "@/components/Logo";
import { useLogout } from "@/lib/auth";

interface Props {
  burger?: React.ReactNode;
}

export const DashboardHeader = ({ burger }: Props) => {
  const [opened, { close, open }] = useDisclosure(false);
  const logout = useLogout();

  const onLogoutClick = () => {
      logout.mutate({});
  }

  return (
    <header className="dashboardHeader">
      {burger && burger}
      <Logo />
      <Box style={{ flex: 1 }} />
   
      <Tooltip label="Configuración">
      <ActionIcon onClick={open} variant="subtle">
        <IconSettings size="1.25rem" />
      </ActionIcon>
      </Tooltip>

      <Tooltip label="Cerrar sesión">
      <ActionIcon onClick={onLogoutClick} variant="subtle">
        <IconLogout size="1.25rem" />
      </ActionIcon>
      </Tooltip>

      <Drawer
        opened={opened}
        onClose={close}
        title="Settings"
        position="right"
        transitionProps={{ duration: 0 }}
      >
        <Stack gap="lg">
          <ThemeSwitcher />
        </Stack>
      </Drawer>
    </header>
  );
};
