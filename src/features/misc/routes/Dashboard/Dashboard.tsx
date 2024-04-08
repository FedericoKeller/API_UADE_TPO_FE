import { useAuth } from "@/lib/auth";
import { Title, Text, List, AppShell, Burger } from "@mantine/core";
import "./Dashboard.scss";
import { useDisclosure } from "@mantine/hooks";
import { Navbar } from "@/components/Navbar";

export const Dashboard = () => {
  const { user } = useAuth();
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 95,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <div>Logo</div>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <Navbar />
      </AppShell.Navbar>

      <AppShell.Main>
        <Title order={1}>
          Bienvenido <b>{`${user?.email}`}</b>
        </Title>
        <Title order={4}>
          Tu rol es: <b>{user?.role}</b>
        </Title>
        <Text size="md">En esta aplicación podés:</Text>
        <List>
          <List.Item>Ver películas</List.Item>
          <List.Item>Crear listas</List.Item>
          <List.Item>Agrupar películas por listas</List.Item>
        </List>
      </AppShell.Main>
    </AppShell>
  );
};
