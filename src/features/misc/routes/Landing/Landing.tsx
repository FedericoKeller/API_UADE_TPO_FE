import { Footer } from "../../components/footer/Footer";
import { HeaderSearch } from "../../components/header/HeaderSearch";
import { HeroHeader } from "../../components/hero-header/hero-header";
import "./Landing.scss";
import { CardsCarousel } from "../../components/carousel/CardsCarousel";
import { Container } from "@mantine/core";






// export const Landing = () => {
//   return (
//       <div className="netlist-landing">
//       <HeaderSearch />
//       <Container size="responsive">
//           {/* <main className="main"> */}
//         <section className="hero-header">
//           <HeroHeader />
//         </section>
//         <section className="trending-carousel">
//           <CardsCarousel />
//         </section>
              
//           {/* </main> */}
//       </Container>
      
        
//       <Footer />
//     </div>

//   );
// };


export const Landing = () => {
  return (
      <div className="netlist-landing">
      <HeaderSearch />
      <Container size="responsive">
          {/* <main className="main"> */}
        <Container size="responsive">
          <HeroHeader />
        </Container>
        <Container size="responsive">
          <CardsCarousel />
        </Container>
              
          {/* </main> */}
      </Container>
      
        
      <Footer />
    </div>

  );
};