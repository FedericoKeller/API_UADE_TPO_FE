import { Box, Flex, Grid, Title, Text } from "@mantine/core";
import { Film } from "@/types/film.model";
import { Image } from "@mantine/core";

export interface CastGridProps {
  cast: Film["cast"];
}

export const CastGrid = ({ cast }: CastGridProps) => {
  const actors = cast?.filter(
    (person) => person.known_for_department === "Acting"
  );

  const cards = actors?.map((item) => {
    const IMAGE_URL = `https://image.tmdb.org/t/p/w500/${item.profile_path}`;
    return (
      <Grid.Col span={{ base: 6, md: 4 }} key={item.id}>
        <Flex gap={10}>
          <Image radius="lg" w={75} h={100} src={IMAGE_URL} fallbackSrc="/src/assets/images/user-avatar.svg" />
          <Box>
            <Title order={4}>{item.name}</Title>
            <Text size="xs" c="dimmed">
              {item.character}
            </Text>
          </Box>
        </Flex>
      </Grid.Col>
    );
  });

  return (
    <div className="u-margin-top--small">
      <Title order={2} className="carousel-title">
        Reparto principal
      </Title>
      <Grid className="u-margin-top--small">{cards}</Grid>
    </div>
  );
};
