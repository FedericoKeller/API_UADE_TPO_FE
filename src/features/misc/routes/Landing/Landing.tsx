import { Footer } from "../../components/footer/Footer";
import { HeaderSearch } from "../../components/header/HeaderSearch";
import { HeroHeader } from "../../components/hero-header/hero-header";
import "./Landing.scss";
import { CardsCarousel } from "../../components/carousel/CardsCarousel";
import { Container } from "@mantine/core";
import { GENRES } from "@/config/mocks/genres.mock";
import { MultiSelectValueRenderer } from "@/components/MultiSelectValueRenderer";
import { useState } from "react";
import { CardsGrid } from "../../components/grid/CardsGrid";

export const Landing = () => {
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);

  const handleGenreChange = (selectedGenres: number[]) => {
    setSelectedGenres(selectedGenres);
  };

  const filteredGenres = GENRES.genres.filter((genre) =>
    selectedGenres.includes(genre.id)
  );

  const genres =
    filteredGenres?.length > 0
      ? filteredGenres.map((genre) => <CardsGrid key={genre.id} genre={genre} />)
      : GENRES.genres.map((genre) => <CardsCarousel key={genre.id} genre={genre} />);

  return (
    <div className="netlist-landing">
      <HeaderSearch />
      <Container size="responsive">
        <Container size="responsive">
          <HeroHeader />
        </Container>
        <Container size="responsive">
          <MultiSelectValueRenderer
            onChange={handleGenreChange}
            className="u-margin-top--small"
            placeholder="Elige uno o más géneros para ver"
            data={GENRES.genres}
          />
          {genres}
        </Container>
      </Container>

      <Footer />
    </div>
  );
};
