import { FILMS } from "@/config";
import { Genre } from "@/types/genres.model";
import { Grid, Title } from "@mantine/core";
import { FilmCard } from "../FilmCard";

export interface CardsGridProps {
    genre: Genre;
}

export const CardsGrid = ( { genre }: CardsGridProps ) => {
  const currentFilms = FILMS.results
  .filter((film) => film.genre_ids.includes(genre.id));

  const cards = currentFilms.map((item) => (
    <Grid.Col span="content" key={item.id}>
      <FilmCard film={item} />
    </Grid.Col>
  ));

  return (
    <div className="u-margin-top--small">
    <Title order={2} className="carousel-title">
    {" "}
    {genre.name}{" "}
  </Title>
    <Grid className="u-margin-top--small">{cards}</Grid>
    </div>
  )
}

  