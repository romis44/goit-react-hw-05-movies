import PropTypes from 'prop-types';
import image from '../images/images.png';
import { ImgBox, Img } from './List/List.styled';

export default function Actors({ cast }) {
  return (
    <ul>
      {cast &&
        cast.map(({ id, name, profile_path, character }) => (
          <li key={id}>
            <ImgBox>
              <Img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/original${profile_path}`
                    : image
                }
                alt={name}
                width="300"
                height="300"
              />
            </ImgBox>
            <h2>{name}</h2>
            <p>Character: {character}</p>
          </li>
        ))}
    </ul>
  );
}

Actors.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      profile_path: PropTypes.string,
      character: PropTypes.string.isRequired,
    })
  ),
};
