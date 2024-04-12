import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { Title, useMantineTheme, rem, Container } from '@mantine/core';
import './CardsCarousel.scss';
import { FilmCard } from '../FilmCard';
import { FILMS } from '@/config';



export const CardsCarousel = () => {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = FILMS.results.map((item) => (
    <Carousel.Slide key={item.title}>
      <FilmCard film={item}/>
    </Carousel.Slide>
  ));

  return (
    <Container className='carousel-column u-margin-top--small'>
      <div><Title order={2} className="carousel-title"> Trending </Title>
      </div>
      <div className='carousel-slides u-margin-top--small'>
        <Carousel
          height="100%"
          slideSize={{ base: '22%', sm: '22%' }}
          slideGap={{ base: rem(0.6), sm: 's' }}
          align="start"
          slidesToScroll={mobile ? 4 : 1}
        >
          {slides}
        </Carousel>
      </div>    
    </Container>
    
  );
}