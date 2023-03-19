import PropTypes from 'prop-types';
import { Label, SearchBtn } from './SearchBar.styled';

export default function SearchBar({ onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <Label>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          name="search"
        />
      </Label>
      <SearchBtn type="submit">
        <span>🔍</span>
      </SearchBtn>
    </form>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
