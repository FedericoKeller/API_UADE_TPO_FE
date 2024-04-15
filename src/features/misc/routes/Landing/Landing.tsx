import { Footer } from "../../components/footer/Footer";
import { HeaderSearch } from "../../components/header/HeaderSearch";
import { HeroHeader } from "../../components/hero-header/hero-header";
import "./Landing.scss";
import { CardsCarousel } from "../../components/carousel/CardsCarousel";
import { Container } from "@mantine/core";


export const Landing = () => {
  return (
      <div className="netlist-landing">
      <HeaderSearch />
      <Container size="responsive">
        <Container size="responsive">
          <HeroHeader />
        </Container>
        <Container size="responsive">
          <CardsCarousel />
        </Container>         
      </Container> 
      <Footer />
    </div>

  );
};