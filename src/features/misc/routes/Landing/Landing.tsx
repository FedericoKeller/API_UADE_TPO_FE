import { Footer } from "../../components/footer/Footer";
import { HeaderSearch } from "../../components/header/HeaderSearch";
import { HeroHeader } from "../../components/hero-header/hero-header";
import { FilmCard } from "../../components/FilmCard";
import "./Landing.scss";

import "./Landing.scss";
import { Container } from "@mantine/core";
export const Landing = () => {
  return (
    <div className="netlist-landing">
      <HeaderSearch />
      <Container>
        <main className="main u-margin-bottom--big">
          <section className="hero-header">
            <HeroHeader />
          </section>
          <section className="trending-carousel"></section>
        </main>

        <FilmCard />
      </Container>

      <Footer />
    </div>
  );
};
