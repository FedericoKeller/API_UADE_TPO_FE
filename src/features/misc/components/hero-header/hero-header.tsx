import { Container, Title, Text, Button } from '@mantine/core';
import './hero-header.scss';

// export const HeroHeader = () => {
//   return (
//     <div className="hero-root">
//     <Container size="responsive">
//       <div className="hero-inner">
//         <div className="hero-content">
//           <Title className="hero-title">
//           Welcome to
//             <Text
//               component="span"
//               inherit
//               variant="gradient"
//               gradient={{ from: 'blue', to: 'violet' }}
//             >
//             {' '} Netlist
//             </Text>
//           </Title>
//           <Text className="hero-description" mt={30}>
//             Find your favorite movie, serie and all details about them. Sign in up for free!
//           </Text>
//           <Button
//             variant="gradient"
//             gradient={{ from: 'blue', to: 'violet' }}
//             size="xl"
//             className="control"
//             mt={40}
//           >
//             Start now
//           </Button>
//         </div>
//       </div>
//     </Container>
//   </div>

    
//   );


  export const HeroHeader = () => {
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