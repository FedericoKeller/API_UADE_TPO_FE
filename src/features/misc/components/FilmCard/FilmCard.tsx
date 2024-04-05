import './FilmCard.scss';
import { Rating } from '@mantine/core';


export const FilmCard = () => {
    return (
        <div
        className="film"
      >
        <div className="saved">+</div>
        <div className="front">
            <img className="thumbnail" src="https://cdnb.artstation.com/p/assets/images/images/034/972/411/large/khushal-sharma-avatar-movie-poster.jpg?1613744215" />
            <h3 className="name">Avatar</h3>
            <div className="stats">
              <p className="rating">4.5</p>
              <Rating fractions={4} value={4.5} />
            </div>
        </div>
        <div className="back">
          <span className='description'>
            
En el planeta Pandora, los Na'vi, seres aparentemente primitivos pero altamente evolucionados, conviven con humanos en forma de Avatares, híbridos que les permiten interactuar con el entorno. Jake Sully, un exinfante de marina paralítico, se enamora de una mujer Na'vi después de transformarse en un Avatar.
          </span>
          <Rating />

        </div>

        <div className="background"></div>
      </div>
    );
}