import { useUser } from "@/lib/auth";
import { useParams } from "react-router-dom";
import { FilmsTable } from "./components/FilmsTable";
import { HightlightAutocomplete } from "@/components/Autocomplete";
import { useState } from "react";
import { Film } from "@/types/film.model";
import { List } from "@/types/list.model";
import { notifications } from "@mantine/notifications";
import { useFilms } from "../../../../api/getFilms";
import { Fallback } from "@/components/Fallback";
import { MenuSearch, SearchOption } from "@/features/misc/components/Menu/SearchMenu/MenuSearch";
import { Group } from "@mantine/core";

export const MyFilmsSection = () => {
  const { id } = useParams();
  const user = useUser();
  const films = useFilms();
  const [option, setOption] = useState<SearchOption>("title");

  const list = user.data?.lists.find((list) => list.id === Number(id)) as List;
  const [currentListFilms, setCurrentListFilms] = useState<Film[] | undefined>(
    list?.films
  );

  if (films.isLoading || user.isLoading) return <Fallback />;

  const handleListFilmChange = (selectedFilm: string) => {
    const newFilm = films.data?.find(
      (film) => film.title === selectedFilm
    ) as Film;
    
    setCurrentListFilms((films) => {
      if (list?.films?.some((currFilm) => currFilm.id === newFilm.id)) {
        notifications.show({
          color: "red",
          message: "La película ya está en la lista",
        });

        return films;
      }

      const updatedFilms = [...(films ?? []), newFilm];
      list.films = updatedFilms as Film[];

      notifications.show({
        color: "green",
        title: "Éxito",
        message: "Película agregada a la lista correctamente",
      });

      return updatedFilms;
    });
  };

  const handleDeleteFilm = (id: number) => {
    setCurrentListFilms((films) => {
      const updatedFilms = films?.filter((film) => film.id !== id);
      list.films = updatedFilms as Film[];
      return updatedFilms;
    });

    notifications.show({
      color: "green",
      title: "Éxito",
      message: "La película fue eliminada correctamente",
    });
  };

  return (
    <>
    <Group>
    <HightlightAutocomplete
        handleFilmChange={handleListFilmChange}
        placeholder="Buscar y agregar película a la lista"
        searchOption={option}
      />
    <MenuSearch handleOptionChange={setOption}/>
    </Group>
      <FilmsTable
        films={currentListFilms}
        handleDeleteFilm={handleDeleteFilm}
      />
    </>
  );
};
