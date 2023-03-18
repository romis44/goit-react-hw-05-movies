import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { ListStyle, Item, Img } from './List.styled';

export default function List({ movies }) {
  const location = useLocation();

  return (
    <ul>
      {movies &&
        movies.map(({ id, poster_path, original_title, title }) => (
          <Item key={id}>
            <Link state={{ from: location }} to={`/movies/${id}`}>
              <Img
                src={`https://image.tmdb.org/t/p/original${poster_path}`}
                alt={original_title}
                width="300"
                height="300"
              />

              <ListStyle>{title}</ListStyle>
            </Link>
          </Item>
        ))}
    </ul>
  );
}

List.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      original_title: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
