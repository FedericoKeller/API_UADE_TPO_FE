import { Footer } from "../../components/Footer/Footer";
import { HeaderSearch } from "../../components/Header/components/HeaderSearch/HeaderSearch";
import { HeroHeader } from "../../components/Header/components/HeroHeader/HeroHeader";
import "./Landing.scss";
import { CardsCarousel } from "../../components/Carousel/CardsCarousel";
import { Container } from "@mantine/core";
import { MultiSelectValueRenderer } from "@/components/MultiSelectValueRenderer";
import { useState } from "react";
import { CardsGrid } from "../../components/Grid/CardsGrid";
import { useGenres } from "@/api/getGenres";
import { Genre } from "@/types/genres.model";
import { Fallback } from "@/components/Fallback";

export const Landing = () => {
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);
  const genres = useGenres();

  if(genres.isLoading) return <Fallback />;

  const handleGenreChange = (selectedGenres: number[]) => {
    setSelectedGenres(selectedGenres);
  };

  const filteredGenres = genres.data?.filter((genre) =>
    selectedGenres.includes(genre.id)
  ) as Genre[];

  const currentGenres =
    filteredGenres?.length > 0
      ? filteredGenres.map((genre) => <CardsGrid key={genre.id} genre={genre} />)
      : genres.data?.map((genre) => <CardsCarousel key={genre.id} genre={genre} />);

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
            data={genres?.data as Genre[]}
          />
          {currentGenres}
        </Container>
      </Container>

      <Footer />
    </div>
  );
};
