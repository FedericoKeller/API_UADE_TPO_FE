import "./FilmCard.scss";
import { Rating } from "@mantine/core";

interface CardProps {
  image: string;
  title: string;
}

export const FilmCard = ({ image, title }: CardProps) => {
  return (
    <div className="film">
      <div className="saved">+</div>
      <div className="front">
        <img
          className="thumbnail"
          src="https://cdnb.artstation.com/p/assets/images/images/034/972/411/large/khushal-sharma-avatar-movie-poster.jpg?1613744215"
        />
        <h3 className="name">Avatar</h3>
        <div className="stats">
          <p className="rating">4.5</p>
          <Rating fractions={4} value={4.5} />
        </div>
      </div>
    </div>
  );
};
