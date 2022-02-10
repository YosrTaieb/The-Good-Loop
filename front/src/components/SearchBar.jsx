import { useState, useEffect, useContext } from 'react';
import BrandContext from '../contexts/BrandContext';
import axios from 'axios';
import { IoSearchSharp } from 'react-icons/io5';
import '../styles/searchbar.css';

const SearchBar = () => {
  const [text, setText] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [filters, setFilters] = useState([]);
  const { brands } = useContext(BrandContext);

  useEffect(() => {
    getFilter();
  }, []);

  useEffect(() => {
    brands.forEach((obj) => filters.push({ name: obj.name, slug: obj.slug }));
  }, [brands]);

  const getFilter = () => {
    axios.get('http://localhost:8000/search').then((response) => {
      response.data.forEach((item) =>
        item[1].forEach((obj) =>
          filters.push({ name: obj.name, slug: obj.name.replace(/\s/g, '+') })
        )
      );
      setFilters(filters);
    });
  };

  const handleSearch = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = filters.filter((filter) => {
        const regularExpression = new RegExp(`${text}`, 'gi');
        return filter.name.match(regularExpression);
      });
    }
    setSuggestions(matches);
    setText(text);
  };

  return (
    <div className="search">
      <div className="search-container relative">
        <div className="searchInputs relative">
          <IoSearchSharp />
          <input
            type="text"
            placeholder="Rechercher..."
            onChange={(e) => handleSearch(e.target.value)}
            value={text}
            onBlur={() => {
              setTimeout(() => {
                setSuggestions([]);
              }, 100);
            }}
          />
        </div>
        <div className="suggestions absolute">
          {suggestions &&
            suggestions.slice(0, 4)?.map((suggestion, index) => (
              // eslint-disable-next-line react/jsx-key
              // eslint-disable-next-line jsx-a11y/no-static-element-interactions
              <div
                key={index}
                className="suggestion"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = `${
                    brands.some((el) => el.name === suggestion.name)
                      ? `/brands/${suggestion.slug}`
                      : `/brands?search=${suggestion.slug}`
                  }`;
                }}
              >
                {suggestion.name}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
