import { Card, List, Space, Text, ThemeIcon, Title } from "@mantine/core";
import { IconCircleCheck } from "@tabler/icons-react";

export function WelcomeCard() {
  return (
    <Card radius="md">
      <Title order={5}>Bienvenido de vuelta!</Title>
      <Text fz="sm" c="dimmed" fw="500">
        Netlist Dashboard
      </Text>
      <Space h="sm" />
      <List
        center
        size="sm"
        spacing="sm"
        icon={
          <ThemeIcon size={22} radius="xl">
            <IconCircleCheck size="1rem" />
          </ThemeIcon>
        }
      >
        <List.Item>Ver películas</List.Item>
        <List.Item>Crear listas</List.Item>
        <List.Item>Agrupar películas por listas</List.Item>
      </List>
    </Card>
  );
}
