import { AppShell, Burger, Card, Container, useMantineColorScheme, useMantineTheme } from "@mantine/core"
import { HeaderSearch } from "../../components/Header/components/HeaderSearch/HeaderSearch"
import { Footer } from "../../components/footer/Footer";
import { useGenres } from "@/api/getGenres";
import { useDisclosure } from "@mantine/hooks";
import { useNavActions } from "@/utils/getNavActions";
import { useState } from "react";
import { Fallback } from "@/components/Fallback";
import { Navbar } from "@/components/Navbar";
import { CardsGrid } from "../../components/grid/CardsGrid";
import { Genre } from "@/types/genres.model";
import { useParams } from "react-router-dom";


interface MovieGenre {
    
    genre: string;
}



export const MoviesGrid = () => {
    const genres = useGenres();
    const [opened, { toggle }] = useDisclosure();
    const { colorScheme } = useMantineColorScheme();
    const theme = useMantineTheme();
    const actions = useNavActions();
    const bg =
        colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0];
    if(genres.isLoading) return <Fallback />;

   const currentGenre = <CardsGrid genre={ {id: 12, name: "Aventura"} } />;
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
    <div className="netlist-movies-grid">
      <Container size="responsive">
        {currentGenre}
      </Container>
      <Footer />
    </div>
    </AppShell.Main>
  </AppShell>
   
  )
}

