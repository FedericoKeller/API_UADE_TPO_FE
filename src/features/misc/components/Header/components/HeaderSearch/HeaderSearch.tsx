import { Group, Burger, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Netlist } from "../../../../icons/Netlist.icon";
import "./HeaderSearch.scss";
import { RouterLink } from "@/components/RouterLink";
import { useLogout, useUser } from "@/lib/auth";
import { useFilms } from "@/api/getFilms";
import { HightlightAutocomplete } from "@/components/Autocomplete";
import { useNavigate } from "react-router-dom";
import { Fallback } from "@/components/Fallback";
import { HeaderSearchItem } from "../../types/header";


export const HeaderSearch = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const films = useFilms();
  const user = useUser();
  const navigate = useNavigate();
  const logout = useLogout();

  if(films.isLoading) return <Fallback />;


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

  const onFilmSelect = (film: string) => {
    const filmId = films.data?.find((f) => f.title === film)?.id;
    if (filmId) {
      navigate(`/film/${filmId}`);
    }
  }

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
          <HightlightAutocomplete
            handleFilmChange={onFilmSelect}
            placeholder="Buscar película"
            data={films.data?.map((film) => film.title) as string[]}
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
