import { useUser } from "@/lib/auth";
import { Container, Image, UnstyledButton } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { Film } from "@/types/film.model";
import { IconCheck, IconPlus } from "@tabler/icons-react";
import { useEffect, useState } from "react";

import "./FilmCard.scss";

export const FilmCard = (props: Film) => {
  const user = useUser();
  const navigate = useNavigate();
  const { title, poster_path, id } = props;
  const IMAGE_URL = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  const isFilmIncluded = (id: number) => {
    return user.data?.lists[0].films.some((film) => film.id === id);
  };

  const [filmState, setFilmState] = useState(isFilmIncluded(id));

  const updateFilmState = () => {
    setFilmState(isFilmIncluded(id));
  };

  const toggleFilm = () => {
    const index = user.data?.lists[0].films.findIndex((film) => film.id === id) as number;
    if (index !== -1) {
      user.data?.lists[0].films.splice(index, 1);
    } else {
      user.data?.lists[0].films.push(props);
    }
    updateFilmState();
  };

  useEffect(() => {
    updateFilmState();
  }, [user.data?.lists[0].films]);

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
        <Image className="thumbnail" src={IMAGE_URL} />
        <h3 className="name">{title}</h3>
      </div>
    </div>
  );
};
