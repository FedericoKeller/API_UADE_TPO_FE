import { Container, Title, Text, Button } from '@mantine/core';
import { useUser } from "@/lib/auth";
import './HeroHeader.scss';
import { useNavigate } from 'react-router-dom';



  export const HeroHeader = () => {

    const navigate = useNavigate();
    const user = useUser();
    const path = user.data ? '/app/lists' : '/auth/login';
        
    return (

      <Container size="responsive" className="hero-root">
        <div className="hero-inner">
          <div className="hero-content">
            <Title className="hero-title">
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
            <Text className="hero-description" mt={30}>
              Find your favorite movie, serie and all details about them. Sign in up for free!
            </Text>
            <Button
              onClick={() => navigate(path)}
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

  
      
    );
}