import { Image, Title, Text, List } from '@mantine/core';
import './hero-description.scss'
import { useFilms } from '@/api/getFilms';
import { useGenres } from '@/api/getGenres';

interface FilmCardProps {
    filmId: string;
  }

export const HeroDescription = ({ filmId }: FilmCardProps) => {
    const films = useFilms();
    const genres = useGenres();
    const film = films.data?.find((film) => film.id === Number(filmId));

    return(
        <section className='description-root'>
            <div className='movie-img'>
                <Image radius="md" src="https://image.tmdb.org/t/p/w500/9rk0NJXs1izgJPZwbkSrkiVFWMQ.jpg"></Image>
            </div>
            <div className='movie-description'>
                <div className='movie-title'>
                    <div className='movie-facts'>
                        <Title order={2}>{film?.title}</Title>
                        <Text span className='certification'> TV-MA </Text>
                        <Text span>Action, Adventure, Drama</Text>
                    </div>
                </div>
                <div className='movie-overview'>
                    <Title className='overview-title' order={3} > Overview</Title>
                    <div>
                        <Text>{film?.overview}</Text>
                    </div>
                    <List className="description-directors" type="ordered" listStyleType='none'>
                        <List.Item>
                            <Text>Nombre Director1</Text>
                            <Text>Creator</Text>
                        </List.Item>
                        <List.Item>
                            <Text>Nombre Director2</Text>
                            <Text>Creator</Text>
                        </List.Item>
                    </List>
                </div>
            </div>
            

        </section>

    );





}