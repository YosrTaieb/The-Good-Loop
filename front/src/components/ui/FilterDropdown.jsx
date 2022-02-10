import { useEffect, useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';

const FilterDropdown = ({ name, list, checked, handleFilter }) => {
  const [toggled, setToggled] = useState(false);
  const [filterCount, setFilterCount] = useState(0);

  useEffect(() => {
    setFilterCount(
      list.filter((e) => checked.includes(e.slug || e.name)).length
    );
  });

  const handleTogggle = () => {
    setToggled(!toggled);
  };
  return (
    <>
      <div
        className="filtreH2 flex items-center"
        role="button"
        tabIndex="0"
        onClick={() => handleTogggle()}
      >
        <h2>{name}</h2>
        {filterCount > 0 && (
          <span className="bg-blue-400 text-white text-sm w-5 h-5 leading-5 font-sans rounded-full ml-2">
            {filterCount}
          </span>
        )}
        <RiArrowDropDownLine
          className={`transition-all duration-300 transform ${
            toggled ? 'rotate-0' : '-rotate-90'
          } inline w-7 h-7`}
        />
      </div>
      <ul
        className={`filtreUl transition-all duration-300 ${
          !toggled ? 'h-0 overflow-hidden' : 'h-auto overflow-visible'
        }`}
      >
        {list.map((item, key) => (
          <li
            key={key}
            className={`filtreLi transition-all duration-300 ${
              !toggled
                ? 'pointer-events-none opacity-0'
                : 'pointer-events-auto opacity-100'
            }`}
          >
            <input
              className={
                checked.includes(item.slug || item.name)
                  ? 'filterCircleYellow'
                  : 'filterCircle'
              }
              defaultChecked={checked.includes(item.slug || item.name)}
              onClick={() => handleFilter(item.slug || item.name)}
            />
            <label>{item.name}</label>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FilterDropdown;
