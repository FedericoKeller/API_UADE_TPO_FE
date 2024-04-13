import { Footer } from "../../components/footer/Footer";
import { HeaderSearch } from "../../components/header/HeaderSearch";
import { HeroHeader } from "../../components/hero-header/hero-header";
import "./Landing.scss";
import { CardsCarousel } from "../../components/carousel/CardsCarousel";
import { Container } from "@mantine/core";
import { GENRES } from "@/config/mocks/genres.mock";
import { MultiSelectValueRenderer } from "@/components/MultiSelectValueRenderer";
import { useState } from "react";

export const Landing = () => {
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);

  const handleGenreChange = (selectedGenres: number[]) => {
    const currentGenres = selectedGenres?.length === 0 ? GENRES.genres.map(genre => genre.id) : selectedGenres;
    setSelectedGenres(currentGenres);
  };

  const filteredGenres = GENRES.genres.filter((genre) =>
    selectedGenres.includes(genre.id)
  );

  const genres = filteredGenres.map((genre) => (
    <Container key={genre.id} size="responsive">
      <CardsCarousel genre={genre} />
    </Container>
  ));

  return (
    <div className="netlist-landing">
      <HeaderSearch />
      <Container size="responsive">
        {/* <main className="main"> */}
        <Container size="responsive">
          <HeroHeader />
        </Container>
        <MultiSelectValueRenderer
          onChange={handleGenreChange}
          className="u-margin-top--small"
          placeholder="Elige uno o más géneros para ver"
          data={GENRES.genres}
        />
        {genres}
        {/* </main> */}
      </Container>

      <Footer />
    </div>
  );
};
