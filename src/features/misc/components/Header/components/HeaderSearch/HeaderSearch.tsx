import { Group, Text } from "@mantine/core";
import "./HeaderSearch.scss";
import { RouterLink } from "@/components/RouterLink";
import { useFilms } from "@/api/getFilms";
import { HightlightAutocomplete } from "@/components/Autocomplete";
import { useNavigate } from "react-router-dom";
import { Fallback } from "@/components/Fallback";
import { Logo } from "@/components/Logo";
import { useNavActions } from "@/utils/getNavActions";

interface HeaderSearchProps {
  burger?: React.ReactNode;
}

export const HeaderSearch = ({ burger }: HeaderSearchProps) => {
  const films = useFilms();
  const navigate = useNavigate();
  const actions = useNavActions();


  if(films.isLoading) return <Fallback />;


  const items = actions.map((action, index) =>
    action.type === "link" ? (
      <RouterLink key={index} to={action.to as string}>
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
    <div className="header">
      <div className="header-inner">
        <Group className="icon">
        {burger && burger}
          <Logo />
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
    </div>
  );
};
