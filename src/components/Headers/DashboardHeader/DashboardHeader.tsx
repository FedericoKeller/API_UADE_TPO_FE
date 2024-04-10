"use client";

import { ActionIcon, Box, Drawer, Stack, TextInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconSearch, IconSettings } from "@tabler/icons-react";
import "./DashboardHeader.scss";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { Logo } from "@/components/Logo";

interface Props {
  burger?: React.ReactNode;
}

export const DashboardHeader = ({ burger }: Props) => {
  const [opened, { close, open }] = useDisclosure(false);

  return (
    <header className="dashboardHeader">
      {burger && burger}
      <Logo />
      <Box style={{ flex: 1 }} />
      <TextInput
        placeholder="Search"
        variant="filled"
        leftSection={<IconSearch size="0.8rem" />}
        style={{}}
      />
      <ActionIcon onClick={open} variant="subtle">
        <IconSettings size="1.25rem" />
      </ActionIcon>

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
