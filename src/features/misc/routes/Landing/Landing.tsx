import { Footer } from "../../components/footer/Footer";
import { HeaderSearch } from "../../components/header/HeaderSearch";
import { HeroHeader } from "../../components/hero-header/hero-header";
import { FilmCard } from "../../components/FilmCard";
import "./Landing.scss";

import { Carousel } from "@mantine/carousel";
import { CardsCarousel } from "../../components/carousel/CardsCarousel";
import { Container } from "@mantine/core";
export const Landing = () => {
  return (
    <Container>
      <div className="netlist-landing">
      <HeaderSearch />
        <main className="main u-margin-bottom--big">
          <section className="hero-header">
            <HeroHeader />
          </section>
          <section className="trending-carousel"></section>
        </main>
        <CardsCarousel />
      <Footer />
    </div>
    </Container>
  );
};
