import {
  Title,
  Text,
  Button,
  Box,
} from "@mantine/core";
import "./HeroDescription.scss";
import { useFilms } from "@/api/getFilms";
import { useGenres } from "@/api/getGenres";
import { Film } from "@/types/film.model";
import { Fallback } from "@/components/Fallback";
import { FilmCard } from "../Cards/FilmCard";
import { useEffect } from "react";
import { modals } from "@mantine/modals";
import { AddToListModal } from "../ModalsContent/AddToListModal/AddToListModal";
import { useUser } from "@/lib/auth";
import { List } from "@/types/list.model";
import { notifications } from "@mantine/notifications";
import { useNavigate } from "react-router-dom";

interface FilmCardProps {
  filmId: string;
}

export const HeroDescription = ({ filmId }: FilmCardProps) => {
  const films = useFilms();
  const genres = useGenres();
  const user = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (films.isLoading || genres.isLoading || user.isLoading) return <Fallback />;


  const onAddToList = () => {
    if(!user.data) return navigate("/auth/login");
    
    const lists = user?.data?.lists;

    const onSuccess = (listName: string) => {
        const list = lists?.find(list => list.title === listName);
        if(!list?.films?.some(currFilm => currFilm.id === film.id)) list?.films.push(film);
        modals.closeAll();

        notifications.show({
          color: "green",
          message: "¡Película agregada correctamente!"
        })
    }

      modals.open({
          title: "Agregar a lista",
          children: <AddToListModal onSuccess={onSuccess} lists={lists as List[]}/>
      })
  }

  const film = films.data?.find((film) => film.id === Number(filmId)) as Film;
  const filmGenres = genres.data
    ?.filter((genre) => film.genre_ids.includes(genre.id))
    .map((genre) => genre.name)
    .join(", ");

  const { title, overview, backdrop_path } = film;
  const BACKDROP_URL = `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path}`;
  

  return (
    <div
      className="description-root"
      style={{
        backgroundImage: `linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #001020 70%), url(${BACKDROP_URL})`,
      }}
    >
      <Box visibleFrom="sm" className="movie-img">
        <FilmCard showLabel={false} showButton={false} film={film}></FilmCard>
      </Box>
      <div className="movie-description">
        <div className="movie-title">
            <div className="movie-facts">
              <Title order={2}>{title}</Title>
              <Text span>{filmGenres}</Text>
            </div>
        </div>
        <div className="movie-overview">
          <Title className="overview-title" order={3}>
            {" "}
            Resumen
          </Title>
          <div>
            <Text>{overview}</Text>
          </div>
          <Button className="u-margin-top--small" onClick={onAddToList}>Agregar a lista</Button>
        </div>
      </div>
    </div>
  );
};
