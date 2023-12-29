import PropTypes from "prop-types";

const SearchBar = ({ options }) => {
  return (
    <div className="search-container">
      <div className="category-input">
        <label htmlFor="category"></label>
        <select id="category" name="category">
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="search-input">
        <label htmlFor="search"></label>
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Search here"
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SearchBar;
