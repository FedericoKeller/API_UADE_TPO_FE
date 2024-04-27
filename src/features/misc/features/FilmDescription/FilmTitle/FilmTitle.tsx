import { useGenres } from "@/api/getGenres";
import { Fallback } from "@/components/Fallback";
import { Film } from "@/types/film.model";
import { Title, Text, Box } from "@mantine/core"

interface FilmTitleProps {
    film: Film;
}

export const FilmTitle = ({ film }: FilmTitleProps) => {
    const genres = useGenres();
    const { title } = film;

    if(genres.isLoading) return <Fallback />;

    const filmGenres = genres.data
    ?.filter((genre) => film.genre_ids.includes(genre.id))
    .map((genre) => genre.name)
    .join(", ");

    return (
        <Box w="100%">
        <Title order={2}>{title}</Title>
        <Text>{filmGenres}</Text>
      </Box>
    )

}