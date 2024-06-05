import { useUser } from "@/lib/auth";
import { useParams } from "react-router-dom";
import { FilmsTable } from "./components/FilmsTable";
import { HightlightAutocomplete } from "@/components/Autocomplete";
import { useState } from "react";
import { notifications } from "@mantine/notifications";
import { Fallback } from "@/components/Fallback";
import { MenuSearch, SearchOption } from "@/features/misc/components/Menu/SearchMenu/MenuSearch";
import { Group } from "@mantine/core";
import { useList } from "../../api/getList";
import { Film } from "@/types/film.model";
import { addFilmToList } from "../../api/addFilmToList";
import { deleteFilmFromList } from "../../api/deleteFilmToList";

export const MyFilmsSection = () => {
  const { id } = useParams();
  const user = useUser();
  const list = useList({ data: { listId: id } });
  const [option, setOption] = useState<SearchOption>("title");


  if ( list.isLoading || user.isLoading) return <Fallback />;

  const handleListFilmChange = async (film: Film) => {
    await addFilmToList(id as string, film); 
    await list.refetch();
    notifications.show({
      color: "green",
      title: "Éxito",
      message: "Película agregada a la lista correctamente",
    });
  };

  const handleDeleteFilm = async (filmId: string) => {
    await deleteFilmFromList(id as string, filmId);
    await list.refetch();
    
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
        films={list.data?.films}
        handleDeleteFilm={handleDeleteFilm}
      />
    </>
  );
};
