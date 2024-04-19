import { Box, Image } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { Film } from "@/types/film.model";

import "./FilmCard.scss";
import { SavedListButton } from "../../Buttons/SavedListButton/SavedListButton";

interface FilmCardProps {
  film: Film;
  showLabel?: boolean;
}

export const FilmCard = ({ film, showLabel = true }: FilmCardProps) => {
  const navigate = useNavigate();
  const { title, poster_path, id } = film;
  const IMAGE_URL = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  return (
    <Box className="film">
      <SavedListButton className="savedButton" film={film} />
      <div className="front">
        <Image className="thumbnail" src={IMAGE_URL} />
        {showLabel && <h3 className="name" onClick={() => navigate(`/film/${id}`)}>{title}</h3>}
      </div>
    </Box>
  );
};
