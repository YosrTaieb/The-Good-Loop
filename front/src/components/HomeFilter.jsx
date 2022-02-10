import { useState, useEffect } from 'react';
import Weartype from './Weartype';
import axios from 'axios';
import '../styles/homeFilter.css';

const HomeFilter = () => {
  const [weartypes, setWeartypes] = useState([]);
  const [toggleWeartypes, setToggleWeartypes] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get('http://localhost:8000/weartypes').then((response) => {
      setWeartypes(response.data);
    });
  };

  const handleToggle = () => {
    setToggleWeartypes(!toggleWeartypes);
  };

  return (
    <div className="m-10">
      <div className="homefilter">
        <h2 className="my-5 pl-20">De quoi-as-tu besoin ?</h2>
        <div className="homefilter_block justify-center transition-all">
          <div className="flex flex-wrap flex-row justify-center justify-items-center">
            {weartypes
              ?.filter((weartype) => toggleWeartypes || weartype.id <= 6)
              .map((weartype) => (
                <Weartype key={weartype.id} weartype={weartype} />
              ))}
          </div>
        </div>
      </div>
      <div className="homefilter_div_button">
        <button
          onClick={() => {
            handleToggle();
          }}
          className="flex border-4 py-2 px-6 focus:outline-none rounded-full"
        >
          {!toggleWeartypes ? 'Afficher tout' : 'Montrer moins'}
        </button>
      </div>
    </div>
  );
};

export default HomeFilter;
