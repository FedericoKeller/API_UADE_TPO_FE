import { useUser } from "@/lib/auth";
import { useParams } from "react-router-dom";
import { FilmsTable } from "./components/FilmsTable";
import { HightlightAutocomplete } from "@/components/Autocomplete";
import { useState } from "react";
import { Film } from "@/types/film.model";
import { List } from "@/types/list.model";
import { notifications } from "@mantine/notifications";
import { useFilms } from "../../../../api/getFilms";

export const MyFilmsSection = () => {
  const { id } = useParams();
  const user = useUser();
  const films = useFilms();
  const list = user.data?.lists.find((list) => list.id === Number(id)) as List;
  const [currentListFilms, setCurrentListFilms] = useState<Film[] | undefined>(
    list?.films
  );

  const handleListFilmChange = (selectedFilm: string) => {
    const newFilm = films.data?.find(
      (film) => film.title === selectedFilm
    ) as Film;
    setCurrentListFilms((films) => {
      const updatedFilms = [...(films ?? []), newFilm];
      list.films = updatedFilms as Film[];
      return updatedFilms;
    });

    notifications.show({
      color: "green",
      title: "Éxito",
      message: "Película agregada a la lista correctamente",
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
      <HightlightAutocomplete
        label="Buscar y agregar película a la lista"
        handleFilmChange={handleListFilmChange}
        data={films.data?.map((film) => film.title) as string[]}
      />
      <FilmsTable
        films={currentListFilms}
        handleDeleteFilm={handleDeleteFilm}
      />
    </>
  );
};
