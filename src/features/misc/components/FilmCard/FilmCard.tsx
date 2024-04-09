import "./FilmCard.scss";
import { Image, Rating } from "@mantine/core";

interface CardProps {
  image: string;
  title: string;
}

export const FilmCard = ({ image, title }: CardProps) => {
  return (
    <div className="film">
      <div className="saved">+</div>
      <div className="front">
        <Image className="thumbnail" src={image}/>
        <h3 className="name">{title}</h3>
        <div className="stats">
          <p className="rating">4.5</p>
          <Rating fractions={4} value={4.5} />
        </div>
      </div>
    </div>
  );
};
