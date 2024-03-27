import { Carousel } from "@mantine/carousel";
import { Footer } from "../../components/footer/Footer";
import { HeaderSearch } from "../../components/header/HeaderSearch";
import { HeroHeader } from "../../components/hero-header/hero-header";
import { CardsCarousel } from "../../components/carousel/CardsCarousel";
import { SingleCard } from "../../components/card/SingleCard";

export const Landing = () => {
  return (
    <div className="netlist-landing">
      <HeaderSearch /> 
      <HeroHeader />
      {/* <Footer /> */}
      {/* <CardsCarousel/> */}
    </div>
  );
};
