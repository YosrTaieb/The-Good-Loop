import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const AddCriterias = () => {
  const params = useParams();
  const [brand, setBrand] = useState([]);
  const [criterias, setCriterias] = useState([]);
  const [initialBrandCriterias, setInitialBrandCriterias] = useState([]);
  const [brandCriteriaRates, setBrandCriteriaRates] = useState({});
  const [rates, setRates] = useState([]);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    getBrand();
    getCriterias();
    getRates();
  }, []);

  const getBrand = () => {
    axios
      .get(`http://localhost:8000/brands/id/${params.id}`)
      .then(({ data }) => {
        setBrand(data);
        setBrandCriteriaRates(data.criterias);
        setInitialBrandCriterias(Object.keys(data.criterias));
      });
  };

  const getCriterias = () => {
    axios.get(`http://localhost:8000/criterias`).then(({ data }) => {
      setCriterias(data);
    });
  };

  const getRates = () => {
    axios.get(`http://localhost:8000/rates`).then(({ data }) => {
      setRates(data);
    });
  };

  const updateBrandCriterias = (e) => {
    e.preventDefault();
    const newBrandCriteriaRates = { ...brandCriteriaRates };
    if (initialBrandCriterias.length !== 0) {
      axios
        .delete(`http://localhost:8000/criterias/params/${params.id}`)
        .then(() => {
          insertNewBrandCriterias(newBrandCriteriaRates);
        })
        .catch((error) => {
          setError(error);
        });
    } else {
      insertNewBrandCriterias(newBrandCriteriaRates);
    }
  };

  const insertNewBrandCriterias = (newBrandCriteriaRates) => {
    if (Object.keys(newBrandCriteriaRates).length) {
      for (const property in newBrandCriteriaRates) {
        const newCriteria = {
          rate_id: newBrandCriteriaRates[property],
          criteria_id: criterias.filter((e) => e.name == property)[0].id,
          brand_id: Number(params.id),
        };
        newBrandCriteriaRates[property] !== 0 &&
          axios.post(`http://localhost:8000/criterias/params`, newCriteria);
      }
    }
    setMessage('La propriété a été mise à jour avec succès !');
  };

  return (
    <div className="md:grid md:grid-cols-3 md:gap-6">
      <div className="px-5 py-5 mt-5 md:mt-0 md:col-span-2">
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
              <h3 className="text-lg mb-5 font-medium leading-6 text-gray-900">
                Editer les critères de {brand.name}
              </h3>
              {criterias?.map((item) => (
                <div key={item.id}>
                  <label
                    className="form-check-label inline-block text-gray-800"
                    htmlFor={item.slug}
                  >
                    {item.name}
                  </label>
                  <select
                    id="rate"
                    name="rate"
                    value={brandCriteriaRates[item.name] || '0'}
                    className="mt-1 block py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    onChange={(e) =>
                      setBrandCriteriaRates({
                        ...brandCriteriaRates,
                        [item.name]: Number(e.target.value),
                      })
                    }
                  >
                    <option value="0">0</option>
                    {rates.map((rate, i) => (
                      <option key={i} value={rate.number}>
                        {rate.number}
                      </option>
                    ))}
                  </select>
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
              onClick={(e) => {
                updateBrandCriterias(e);
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
export default AddCriterias;
