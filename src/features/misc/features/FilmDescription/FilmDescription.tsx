import { Box } from "@mantine/core";
import "./FilmDescription.scss";
import { Film } from "@/types/film.model";
import { Fallback } from "@/components/Fallback";
import { FilmCard } from "../../components/Cards/FilmCard";
import { useEffect } from "react";
import { FilmOverview } from "./FilmOverview/FilmOverview";
import { FilmTitle } from "./FilmTitle/FilmTitle";
import { CastGrid } from "../../components/Grid/CastGrid/CastGrid";
import { useFilm } from "@/api/getFilmById";

interface FilmDescriptionProps {
  filmId: string;
}

export const FilmDescription = ({ filmId }: FilmDescriptionProps) => {
  const film = useFilm({ data: { id: filmId } });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (film.isLoading) return <Fallback />;

  const filmData = film.data as Film;
  console.log(filmData)
  const { overview, backdrop_path } = filmData;
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
          <FilmCard showLabel={false} showButton={false} film={filmData}></FilmCard>
        </Box>
        <Box className="movie-description">
            <Box className="movie-title">
              <FilmTitle film={filmData} />
            </Box>
          <Box className="movie-overview">
            <FilmOverview overview={overview} film={filmData} />
          </Box>
        </Box>
      </Box>
      <Box className="movie-cast">
        <CastGrid title="Reparto principal" department="Acting" credits={filmData.cast} />
        <CastGrid title="Dirección" department="Directing" credits={filmData.crew} />
      </Box>
    </Box>
  );
};
