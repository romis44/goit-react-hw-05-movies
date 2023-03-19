import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { ListStyle, Img } from './List.styled';
import image from '../../images/photo.webp';

export default function List({ movies }) {
  const location = useLocation();

  return (
    <ul>
      {movies &&
        movies.map(({ id, poster_path, original_title, title }) => (
          <li key={id}>
            <Link state={{ from: location }} to={`/movies/${id}`}>
              <Img
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500${poster_path}`
                    : image
                }
                alt={original_title}
                width="300"
                height="300"
              />

              <ListStyle>{title}</ListStyle>
            </Link>
          </li>
        ))}
    </ul>
  );
}

List.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
      original_title: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
