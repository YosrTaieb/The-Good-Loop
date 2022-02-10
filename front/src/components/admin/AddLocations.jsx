import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const AddLocations = () => {
  const params = useParams();
  const [brand, setBrand] = useState([]);
  const [locations, setLocations] = useState([]);
  const [initialBrandLocations, setInitialBrandLocations] = useState([]);
  const [brandLocations, setBrandLocations] = useState([]);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    getBrand();
    getLocations();
  }, []);

  const getBrand = () => {
    axios
      .get(`http://localhost:8000/brands/id/${params.id}`)
      .then(({ data }) => {
        setBrand(data);
        setInitialBrandLocations(
          Object.keys(data.locations).map((e) => Number(e.split(',')[0]))
        );
        Object.keys(data.locations)
          .map((e) => Number(e.split(',')[0]))
          .forEach((e) => brandLocations.push(e));
      });
  };

  const getLocations = () => {
    axios.get(`http://localhost:8000/locations`).then(({ data }) => {
      setLocations(data);
    });
  };

  const updateBrandLocations = () => {
    const newLocations = [...brandLocations];
    if (initialBrandLocations[0] !== 0) {
      axios
        .delete(`http://localhost:8000/locations/params/${params.id}`)
        .then(() => {
          insertNewBrandLocations(newLocations);
        })
        .catch((error) => {
          setError(error);
        });
    } else {
      insertNewBrandLocations(newLocations);
    }
  };

  const insertNewBrandLocations = (newLocations) => {
    if (newLocations.length) {
      newLocations.map((location) => {
        const newLocations = {
          location_id: location,
          brand_id: params.id,
        };
        location !== 0 &&
          axios.post(`http://localhost:8000/locations/params`, newLocations);
      });
    }
    setMessage('La propriété a été mise à jour avec succès !');
  };

  const handleCheck = (property) => {
    if (brandLocations.includes(property)) {
      setBrandLocations(brandLocations.filter((item) => item !== property));
    } else setBrandLocations([...brandLocations, property]);
  };

  return (
    <div className="md:grid md:grid-cols-3 md:gap-6">
      <div className="px-5 py-5 mt-5 md:mt-0 md:col-span-2">
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
              <h3 className="text-lg mb-5 font-medium leading-6 text-gray-900">
                Editer les lieux de vente de {brand.name}
              </h3>
              {locations?.map((location) => (
                <div key={location.id}>
                  <input
                    className="form-check-input h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="checkbox"
                    id={location.slug}
                    name={location.slug}
                    defaultChecked={initialBrandLocations.includes(location.id)}
                    onChange={() => handleCheck(location.id)}
                  ></input>
                  <label
                    className="form-check-label inline-block text-gray-800"
                    htmlFor={location.slug}
                  >
                    {location.city}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="px-5 py-5 bg-white text-right sm:px-6">
            {error && (
              <div
                className="flex bg-red-100 rounded-lg p-4 mb-4 text-sm text-red-700"
                role="alert"
              >
                <svg
                  className="w-5 h-5 inline mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <div>
                  <span className="font-medium">{error}</span>
                </div>
              </div>
            )}
            {message && (
              <div
                className="flex bg-green-100 rounded-lg p-4 mb-4 text-sm text-green-700"
                role="alert"
              >
                <svg
                  className="w-5 h-5 inline mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <div>
                  <span className="font-medium">{message}</span>
                </div>
              </div>
            )}
            <button
              type="submit"
              value="Send"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => {
                updateBrandLocations();
              }}
            >
              Mettre à jour
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddLocations;
