import { DoubleHeader } from "../../components/DoubleHeader";
import { FilmCard } from "../../components/FilmCard";
import { Container } from '@mantine/core';

import './Landing.scss';
export const Landing = () => {
  return (
    <Container>
      <DoubleHeader />
      <FilmCard />
    </Container>
  );
};
