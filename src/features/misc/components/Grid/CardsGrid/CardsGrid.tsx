import { Grid, Title, Text, rem } from "@mantine/core";
import { FilmCard } from "../../Cards/FilmCard";
import { useFilms } from "@/api/getFilms";
import { Genre } from "tmdb-ts";

export interface CardsGridProps {
  genre: Genre;
}

export const CardsGrid = ({ genre }: CardsGridProps) => {
  const films = useFilms();
  const currentFilms = films.data?.filter((film) =>
    film.genre_ids.includes(genre.id)
  );

  const cards = currentFilms?.map((item) => (
    <Grid.Col span="content" key={item.id}>
      <FilmCard film={item} />
    </Grid.Col>
  ));

  return (
    <>
      <div className="u-margin-top--small">
        <Title order={2} className="carousel-title">
          {genre.name}
        </Title>
      </div>
      {cards?.length ? (
        <Grid className="u-margin-top--small">{cards}</Grid>
      ) : (
        <Text mt={rem(10)} size="sm" c="dimmed">
          No hay registros para mostrar.
        </Text>
      )}
    </>
  );
};
