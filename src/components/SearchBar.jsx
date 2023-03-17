import PropTypes from 'prop-types';

export default function SearchBar({ onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <label>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          name="search"
        />
      </label>
      <button type="submit">
        <span>🔍</span>
      </button>
    </form>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
