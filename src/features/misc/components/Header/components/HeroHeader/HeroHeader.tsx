import { Container, Title, Text, Button } from '@mantine/core';
import { useUser } from "@/lib/auth";
import './HeroHeader.scss';
import { useNavigate } from 'react-router-dom';
import { Fallback } from '@/components/Fallback';



  export const HeroHeader = () => {

    const navigate = useNavigate();
    const user = useUser();
    
    if(user.isLoading) return <Fallback />;

    const path = user.data ? '/app/lists' : '/auth/login';
        
    return (

      <Container size="responsive" className="hero-root">
      <div className="hero-inner">
        <div className="hero-content">
        <Title className="hero-title">
        Bienvenido a
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
          Encuentra tus películas y series favoritas y todos los detalles sobre ellas. ¡Regístrate gratis!
        </Text>
        <Button
          onClick={() => navigate(path)}
          variant="gradient"
          gradient={{ from: 'blue', to: 'violet' }}
          size="xl"
          className="control"
          mt={40}
        >
          Comenzar ahora
        </Button>
        </div>
      </div>
      </Container>

    
      
    );
}