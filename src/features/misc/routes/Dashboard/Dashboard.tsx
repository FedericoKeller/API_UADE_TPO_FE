import { useAuth } from "@/lib/auth";
import { Container, Title, Text, List } from "@mantine/core";
import './Dashboard.scss';

export const Dashboard = () => {
  const { user } = useAuth();
  return (
    <Container>
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
    </Container>
  );
};
