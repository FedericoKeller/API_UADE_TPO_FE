import { Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import image from './image.svg';
import classes from './hero-description.scss';
import { Film } from '@/types/film.model';
import { useNavigate } from 'react-router-dom';
import './hero-description.scss'

interface FilmCardProps {
    film: Film;
  }

export const HeroDescription = () => {
  

    //Esta todo hardcode hay que cambiarlo 
    return(
        <section className='description-root'>
            <div className='movie-img'>
                <Image radius="md" src="https://image.tmdb.org/t/p/w500/9rk0NJXs1izgJPZwbkSrkiVFWMQ.jpg"></Image>
            </div>
            <div className='movie-description'>
                <div className='movie-title'>
                    <div className='movie-facts'>
                        <Title order={2}> Dune: Part Two</Title>
                        <Text span className='certification'> TV-MA </Text>
                        <Text span>Action, Adventure, Drama</Text>
                    </div>
                </div>
                <div className='movie-overview'>
                    <Title className='overview-title' order={3} > Overview</Title>
                    <div>
                        <Text>Sigue el viaje mítico de Paul Atreides mientras se une a Chani y los Fremen en una guerra de venganza contra los conspiradores que destruyeron a su familia. Al enfrentarse a una elección entre el amor de su vida y el destino del universo conocido, Paul se esfuerza por evitar un futuro terrible que solo él puede prever.</Text>
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