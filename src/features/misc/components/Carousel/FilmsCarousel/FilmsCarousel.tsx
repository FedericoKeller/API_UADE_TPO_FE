import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import { Title, useMantineTheme, rem, Container } from "@mantine/core";
import "./FilmsCarousel.scss";
import { FilmCard } from "../../Cards/FilmCard";
import { Genre } from "@/types/genres.model";
import { useFilms } from "@/api/getFilms";
import { Fallback } from "@/components/Fallback";

export interface FilmsCarouselProps {
  genre: Genre;
}

export const FilmsCarousel = ({ genre }: FilmsCarouselProps) => {
  const theme = useMantineTheme();
  const films = useFilms();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  if(films.isLoading) return <Fallback />;

  const slides = films.data?.filter((film) => film.genre_ids.includes(genre.id))
    .map((item) => (
      <Carousel.Slide key={item.title}>
        <FilmCard film={item} />
      </Carousel.Slide>
    ));

  return (
    <Container className="carousel-column u-margin-top--small">
      <div>
        <Title order={2} className="carousel-title">
          {" "}
          {genre.name}{" "}
        </Title>
      </div>
      <div className="carousel-slides u-margin-top--small">
        <Carousel
          height="100%"
          slideSize={{ base: "20%", sm: "20%" }}
          slideGap={{ base: rem(0.6), sm: "s" }}
          align="start"
          slidesToScroll={mobile ? 4 : 5}
        >
          {slides}
        </Carousel>
      </div>
    </Container>
  );
};
