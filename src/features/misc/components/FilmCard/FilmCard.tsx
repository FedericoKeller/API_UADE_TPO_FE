import { useUser } from "@/lib/auth";
import { Button, Image, UnstyledButton } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { Film } from "@/types/film.model";
import { IconCheck, IconPlus } from "@tabler/icons-react";
import { useCallback, useEffect, useState } from "react";

import "./FilmCard.scss";

interface FilmCardProps {
  film: Film;
}

export const FilmCard = ({ film }: FilmCardProps) => {
  const user = useUser();
  const navigate = useNavigate();
  const { title, poster_path, id } = film;
  const IMAGE_URL = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  const isFilmIncluded = useCallback(
    (id: number) => {
      return user.data?.lists[0]?.films.some((film) => film.id === id);
    },
    [user.data]
  );

  const [filmState, setFilmState] = useState(isFilmIncluded(id));

  const updateFilmState = useCallback(() => {
    setFilmState(isFilmIncluded(id));
  }, [id, isFilmIncluded]);

  const toggleFilm = () => {
    const index = user.data?.lists[0]?.films.findIndex(
      (film) => film.id === id
    ) as number;
    if (index !== -1) {
      user.data?.lists[0]?.films.splice(index, 1);
    } else {
      user.data?.lists[0]?.films.push(film);
    }
    updateFilmState();
  };

  const userFilms = user.data?.lists[0]?.films;

  useEffect(() => {
    updateFilmState();
  }, [userFilms, updateFilmState]);

  const onSaveClick = () => {
    if (!user?.data) {
      navigate("/auth/login");
    } else {
      toggleFilm();
    }
  };

  return (
    <div className="film">
      <UnstyledButton className="saved" onClick={onSaveClick}>
        {filmState ? <IconCheck /> : <IconPlus />}
      </UnstyledButton>
      <div className="front">
        <a href="http://localhost:5173/description"> {/*hay que hacerlo dinamico */}
          <Image className="thumbnail" src={IMAGE_URL} />
        </a>
        <h3 className="name">{title}</h3>
      </div>
    </div>
  );
};
