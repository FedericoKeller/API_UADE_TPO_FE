import { Autocomplete, Group, Burger, rem, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconSearch } from "@tabler/icons-react";
import { Netlist } from "../../icons/Netlist.icon";
import "./HeaderSearch.scss";
import { RouterLink } from "@/components/RouterLink";
import { useLogout, useUser } from "@/lib/auth";
import { FILMS } from "@/config";
import { HeaderSearchItem } from "./types/header.types";

export const HeaderSearch = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const user = useUser();

  const logout = useLogout();

  const onLogoutClick = () => {
      logout.mutate({});
  }

  const PUBLIC_ACTIONS = [
    { to: "/auth/login", label: "Iniciar sesión", type: "link" },
  ] as const satisfies readonly HeaderSearchItem[];

  const PROTECTED_ACTIONS = [
    { to: "/app/lists", label: "Watchlist", type: "link" },
    { to: "/app/welcome", label: "Dashboard", type: "link" },
    { label: "Cerrar sesión", type: "button", onClick: onLogoutClick },
  ] as const satisfies readonly HeaderSearchItem[];

  const actions = user?.data ? PROTECTED_ACTIONS : PUBLIC_ACTIONS;

  const items = actions.map((action, index) =>
    action.type === "link" ? (
      <RouterLink key={index} to={action.to}>
        {action.label}
      </RouterLink>
    ) : (
      <Text className="link" key={index} onClick={action.onClick}>
        {action.label}
      </Text>
    )
  );

  return (
    <header className="header">
      <div className="header-inner">
        <Group className="icon">
          <Netlist width={40} height={40} />
          <Burger
            className="burger-container"
            opened={opened}
            onClick={toggle}
            size="sm"
            hiddenFrom="sm"
          />
          <Autocomplete
            className="search"
            placeholder="Search"
            leftSection={
              <IconSearch
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
              />
            }
            data={FILMS.results.map((film) => film.title)}
          />
        </Group>
        <Group>
          <Group ml={50} gap={5} className="links" visibleFrom="sm">
            {items}
          </Group>
        </Group>
      </div>
    </header>
  );
};
