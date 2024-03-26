import { Container, Title, Text, Button } from '@mantine/core';
import './hero-header.scss';

export const HeroHeader = () => {
  return (
    <section className='hero'>
      <div className="root">
      <Container size="lg">
        <div className="inner">
          <div className="content">
            <Title className="title">
            Welcome to
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'blue', to: 'violet' }}
              >
              {' '} Netlist
              </Text>
            </Title>
            <Text className="description" mt={30}>
              Find your favorite movie, serie and all details about them. Sign in up for free!
            </Text>
            <Button
              variant="gradient"
              gradient={{ from: 'blue', to: 'violet' }}
              size="xl"
              className="control"
              mt={40}
            >
              Start now
            </Button>
          </div>
        </div>
      </Container>
    </div>
    </section>
    
  );
}