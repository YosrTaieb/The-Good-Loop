import './../styles/brands.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import BrandCard from './BrandCard';
import { useSearchParams } from 'react-router-dom';
import { StyledOffCanvas, Menu, Overlay } from 'styled-off-canvas';
import FilterIcon from '../../src/assets/images/filter.svg';
import FilterDropdown from './ui/FilterDropdown';

const Brands = () => {
  const [brands, setBrands] = useState([]);
  const [filters, setFilters] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  let [checked, setChecked] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    getData();
    getFilter();
    setSearchParams(searchParams);
    const weartype = searchParams.get('weartype');
    const search = searchParams.get('search');
    weartype && handleFilter(weartype);
    search && handleFilter(search);
  }, []);

  const getData = () => {
    axios.get('http://localhost:8000/brands').then((response) => {
      setBrands(response.data);
    });
  };
  const getFilter = () => {
    axios.get('http://localhost:8000/search').then((response) => {
      setFilters(response.data);
    });
  };

  let dataFiltered = brands;
  checked.map(
    (selected) =>
      (dataFiltered = dataFiltered.filter(
        (brand) =>
          brand.morphos?.split(';').includes(selected) ||
          Object.entries(brand).includes(selected) ||
          Object.keys(brand.weartypes).some((el) =>
            el.split(',').includes(selected)
          ) ||
          brand.fabrication?.includes(selected) ||
          brand.materials?.includes(selected) ||
          brand.qualities?.split(';').includes(selected) ||
          brand.criterias[selected] == 5
      ))
  );
  const handleFilter = (property) => {
    if (checked.includes(property)) {
      setChecked(checked.filter((item) => item !== property));
    } else setChecked([...checked, property]);
  };

  return (
    <section>
      <p className="filtreLenghtResult">{dataFiltered.length} resultat(s)</p>
      <div className="filtreContainer">
        <div className="searchBrandCard">
          {dataFiltered.map((brand) => (
            <BrandCard key={brand.id} brand={brand} />
          ))}
        </div>
        <div className="filtreBrands">
          <StyledOffCanvas isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <button onClick={() => setIsOpen(!isOpen)}>
              <img src={FilterIcon} alt="filtrer" width="48" height="48" />
            </button>
            <Menu>
              {filters &&
                filters.map((categorie, index) => (
                  <FilterDropdown
                    key={index}
                    name={categorie[0]}
                    list={categorie[1]}
                    checked={checked}
                    handleFilter={handleFilter}
                  />
                ))}
              <div className="btnFilter">
                <button
                  type="reset"
                  className="flex border-4 py-2 px-6 focus:outline-none rounded-full"
                  onClick={() => setChecked([])}
                >
                  Effacer
                </button>
                <button
                  className="flex border-4 py-2 px-6 focus:outline-none rounded-full"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Fermer
                </button>
              </div>
            </Menu>
            <Overlay />
          </StyledOffCanvas>
        </div>
      </div>
    </section>
  );
};

export default Brands;
