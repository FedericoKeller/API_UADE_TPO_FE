import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { Title, useMantineTheme, rem, Container } from '@mantine/core';
import './CardsCarousel.scss';
import { FilmCard } from '../FilmCard';


const data = [
  {
    image:
    "https://cdnb.artstation.com/p/assets/images/images/034/972/411/large/khushal-sharma-avatar-movie-poster.jpg?1613744215",
    title: 'Best forests to visit in North America',
  },
  {
    image:
    "https://cdnb.artstation.com/p/assets/images/images/034/972/411/large/khushal-sharma-avatar-movie-poster.jpg?1613744215",
    title: 'Hawaii beaches review: better than you think',
  },
  {
    image:
      "https://cdnb.artstation.com/p/assets/images/images/034/972/411/large/khushal-sharma-avatar-movie-poster.jpg?1613744215",
    title: 'Mountains at night: 12 best locations to enjoy the view',
  },
  {
    image:
    "https://cdnb.artstation.com/p/assets/images/images/034/972/411/large/khushal-sharma-avatar-movie-poster.jpg?1613744215",
    title: 'Aurora in Norway: when to visit for best experience',
  },
  {
    image:
    "https://cdnb.artstation.com/p/assets/images/images/034/972/411/large/khushal-sharma-avatar-movie-poster.jpg?1613744215",
    title: 'Best places to visit this winter',
    category: 'tourism',
  },
  {
    image:
    "https://cdnb.artstation.com/p/assets/images/images/034/972/411/large/khushal-sharma-avatar-movie-poster.jpg?1613744215",
    title: 'Active volcanos reviews: travel at your own risk',
  },
];

export const CardsCarousel = () => {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <FilmCard {...item}/>
    </Carousel.Slide>
  ));

  return (
    <Container className='carousel-column'>
      <div><Title order={2} className="carousel-title"> Trending </Title>
      </div>
      <div className='carousel-slides'>
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