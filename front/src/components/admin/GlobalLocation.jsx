import React from 'react';
import NavBar from '../admin/NavBar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../../styles/dashboardAdmin.css';
import CreateLocation from './CreateLocation';

const GlobalLocation = () => {
  const [error, setError] = useState('');
  const [location, setLocation] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get('http://localhost:8000/locations').then((response) => {
      setLocation(response.data);
    });
  };
  const deleteLocation = (id) => {
    axios.delete(`http://localhost:8000/locations/${id}`).then(({ data }) => {
      if (data.error) setError(data.error);
      else {
        setError('');
        window.location.reload();
      }
    });
  };
  return (
    <section className="admin items-stretch relative">
      <NavBar />
      <div className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
        <CreateLocation />
        <table className="table-fixed min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th
                scope="col"
                className="p-4 text-left text-xs font-medium text-gray-500 uppercase"
              >
                Id
              </th>
              <th
                scope="col"
                className="p-4 text-left text-xs font-medium text-gray-500 uppercase"
              >
                Ville
              </th>
              <th
                scope="col"
                className="p-4 text-left text-xs font-medium text-gray-500 uppercase"
              >
                Pays
              </th>
              <th
                scope="col"
                className="p-4 text-left text-xs font-medium text-gray-500 uppercase"
              >
                SUPPRIMER
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {location?.map((item) => (
              <tr className="hover:bg-gray-100" key={item.id}>
                <td className="p-4 w-4">{item.id}</td>
                <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                  {item.city}
                </td>
                <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                  {item.country}
                </td>
                <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                  <button
                    onClick={() => deleteLocation(item.id)}
                    type="button"
                    data-modal-toggle="delete-product-modal"
                    className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center"
                  >
                    <svg
                      className="mr-2 h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Supprimer
                  </button>
                  {error && <p className="register-error">{error}</p>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default GlobalLocation;
