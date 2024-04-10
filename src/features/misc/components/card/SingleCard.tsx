import { Paper, Text, Title, Button } from '@mantine/core';
import'./SingleCard.scss';


interface CardProps {
    image: string;
    title: string;

  }


export const SingleCard = ({ image, title}: CardProps) => {
  return (
    <Paper shadow="md" p="xl" radius="md" className="card" style={{ backgroundImage: `url(${image})` }}
    >
      <div>
        <Text className="category" size="xs">
          banana
        </Text>
        <Title order={3} className="title">
          {title}
        </Title>
      </div>
      <Button variant="white" color="dark">
        Read article
      </Button>
    </Paper>
  );
}