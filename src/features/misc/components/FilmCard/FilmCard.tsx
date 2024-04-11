import { useUser } from "@/lib/auth";
import "./FilmCard.scss";
import { Container, Image, UnstyledButton } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { Film } from "@/types/film.model";

export const FilmCard = (props: Film) => {
  const user = useUser();
  const navigate = useNavigate();
  const { title, poster_path } = props;
  const IMAGE_URL = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  const onSaveClick = () => {
    console.log(user.data);

    if (!user?.data) {
      return navigate("/auth/login");
    }

    user.data.lists[0].films.push(props);
  };

  return (
      <div className="film">
        <UnstyledButton className="saved" onClick={onSaveClick}>
          +
        </UnstyledButton>
        <div className="front">
          <Image className="thumbnail" src={IMAGE_URL} />

          <h3 className="name">{title}</h3>
        </div>
      </div>
  );
};
