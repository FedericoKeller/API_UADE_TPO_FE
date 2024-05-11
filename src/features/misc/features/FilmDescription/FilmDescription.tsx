import { Box } from "@mantine/core";
import "./FilmDescription.scss";
import { useFilms } from "@/api/getFilms";
import { Film } from "@/types/film.model";
import { Fallback } from "@/components/Fallback";
import { FilmCard } from "../../components/Cards/FilmCard";
import { useEffect } from "react";
import { useUser } from "@/lib/auth";
import { FilmOverview } from "./FilmOverview/FilmOverview";
import { FilmTitle } from "./FilmTitle/FilmTitle";
import { CastGrid } from "../../components/Grid/CastGrid/CastGrid";

interface FilmDescriptionProps {
  filmId: string;
}

export const FilmDescription = ({ filmId }: FilmDescriptionProps) => {
  const films = useFilms();
  const user = useUser();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (films.isLoading || user.isLoading) return <Fallback />;

  const film = films.data?.find((film) => film.id === Number(filmId)) as Film;

  const { overview, backdrop_path } = film;
  const BACKDROP_URL = `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path}`;

  return (
    <Box>
      <Box
        className="description-root"
        p={{ base: "2rem", lg: "6rem" }}
        style={{
          backgroundImage: `linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #001020 70%), url(${BACKDROP_URL})`,
        }}
      >
        <Box visibleFrom="sm" className="movie-img">
          <FilmCard showLabel={false} showButton={false} film={film}></FilmCard>
        </Box>
        <Box className="movie-description">
            <Box className="movie-title">
              <FilmTitle film={film} />
            </Box>
          <Box className="movie-overview">
            <FilmOverview overview={overview} film={film} />
          </Box>
        </Box>
      </Box>
      <Box className="movie-cast">
        <CastGrid title="Reparto principal" department="Acting" cast={film.cast} />
        <CastGrid title="Dirección" department="Directing" cast={film.crew} />
      </Box>
    </Box>
  );
};
