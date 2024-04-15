import {
  Image,
  Title,
  Text,
  List,
  AspectRatio,
  Overlay,
  BackgroundImage,
} from "@mantine/core";
import "./HeroDescription.scss";
import { useFilms } from "@/api/getFilms";
import { useGenres } from "@/api/getGenres";
import { Film } from "@/types/film.model";
import { Fallback } from "@/components/Fallback";

interface FilmCardProps {
  filmId: string;
}

export const HeroDescription = ({ filmId }: FilmCardProps) => {
  const films = useFilms();
  const genres = useGenres();

  if(films.isLoading || genres.isLoading) return <Fallback />;

  const film = films.data?.find((film) => film.id === Number(filmId)) as Film;
  const filmGenres = genres.data
    ?.filter((genre) => film.genre_ids.includes(genre.id))
    .map((genre) => genre.name)
    .join(", ");

  const { title, overview, poster_path, backdrop_path } = film;
  const BACKDROP_URL = `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path}`;
  const IMAGE_URL = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  return (
    <>
      <AspectRatio ratio={16 / 9} maw={1200} mx="auto">
        <BackgroundImage src={BACKDROP_URL}></BackgroundImage>
        <Overlay
          gradient="linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #001020 70%)"
          opacity={0.85}
        />
      </AspectRatio>
      <div className="movie-img">
        <Image radius="md" src={IMAGE_URL}></Image>
      </div>
      <div className="movie-description">
        <div className="movie-title">
          <div className="movie-facts">
            <Title order={2}>{title}</Title>
            <Text span className="certification">
              {" "}
              TV-MA{" "}
            </Text>
            <Text span>{filmGenres}</Text>
          </div>
        </div>
        <div className="movie-overview">
          <Title className="overview-title" order={3}>
            {" "}
            Overview
          </Title>
          <div>
            <Text>{overview}</Text>
          </div>
          <List
            className="description-directors"
            type="ordered"
            listStyleType="none"
          >
            <List.Item>
              <Text>Nombre Director1</Text>
              <Text>Creator</Text>
            </List.Item>
            <List.Item>
              <Text>Nombre Director2</Text>
              <Text>Creator</Text>
            </List.Item>
          </List>
        </div>
      </div>
    </>
  );
};
