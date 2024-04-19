import { Footer } from "../../components/Footer/Footer";
import { HeaderSearch } from "../../components/Header/components/HeaderSearch/HeaderSearch";
import { HeroHeader } from "../../components/Header/components/HeroHeader/HeroHeader";
import "./Landing.scss";
import { CardsCarousel } from "../../components/Carousel/CardsCarousel";
import { AppShell, Burger, Container, useMantineColorScheme, useMantineTheme } from "@mantine/core";
import { MultiSelectValueRenderer } from "@/components/MultiSelectValueRenderer";
import { useState } from "react";
import { useGenres } from "@/api/getGenres";
import { Genre } from "@/types/genres.model";
import { Fallback } from "@/components/Fallback";
import { CardsGrid } from "../../components/Grid/CardsGrid";
import { Navbar } from "@/components/Navbar";
import { useDisclosure } from "@mantine/hooks";
import { useNavActions } from "@/utils/getNavActions";

export const Landing = () => {
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);
  const genres = useGenres();
  const [opened, { toggle }] = useDisclosure();
  const { colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  const actions = useNavActions();
  const bg =
    colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0];


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
    <AppShell
    header={{ height: 60 }}
    navbar={{ width: 300, breakpoint: "sm", collapsed: { desktop: true, mobile: !opened } }}
    padding="md"
    transitionDuration={500}
    transitionTimingFunction="ease"
  >
    <AppShell.Header>
      <HeaderSearch burger={
          <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom="sm"
            size="sm"
            mr="xl"
          />} />
    </AppShell.Header>

    <AppShell.Navbar p="md">
      <Navbar data={actions} hidden={!opened} />
    </AppShell.Navbar>

    <AppShell.Main bg={bg}>
    <div className="netlist-landing">
     
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
    </AppShell.Main>
  </AppShell>
   
  );
};
