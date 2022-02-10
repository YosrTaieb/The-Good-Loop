import NavBar from './NavBar';
import AddWeartype from './AddWeartype';
import AddMorpho from './AddMorpho';
import AddFabrications from './AddFabrications';
import AddLocations from './AddLocations';
import AddMateriau from './AddMateriau';
import AddQuality from './AddQuality';
import AddCriterias from './AddCriterias';

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const AddParams = () => {
  const [brand, setBrand] = useState([]);
  const params = useParams();

  useEffect(() => {
    getBrand();
  }, []);

  const getBrand = () => {
    axios
      .get(`http://localhost:8000/brands/id/${params.id}`)
      .then(({ data }) => {
        setBrand(data);
      });
  };

  return (
    <section className="admin items-stretch relative">
      <NavBar />
      <div className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
        <img className="m-5 h-10" src={brand.logo} alt={brand.name} />
        <AddWeartype />
        <AddMorpho />
        <AddFabrications />
        <AddLocations />
        <AddMateriau />
        <AddQuality />
        <AddCriterias />
      </div>
    </section>
  );
};

export default AddParams;
