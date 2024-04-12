import { Autocomplete, Group, Burger, rem } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconSearch } from "@tabler/icons-react";
import { Netlist } from "../../icons/Netlist.icon";
import "./HeaderSearch.scss";
import { RouterLink } from "@/components/RouterLink";
import { useUser } from "@/lib/auth";
import { FILMS } from "@/config";

export const HeaderSearch = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const user = useUser();

  const publicLinks = [{ link: "/auth/login", label: "Sign in" }];

  const protectedLinks = [
    { link: "/app/lists", label: "Watchlist" },
    { link: "/app/welcome", label: "Dashboard" },
  ];

  const links = user?.data ? protectedLinks : publicLinks;

  const items = links.map((link, index) => (
    <RouterLink key={index} to={link.link}>
      {link.label}
    </RouterLink>
  ));

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
