import React from 'react';
import NavBar from './admin/NavBar';
import { useState, useEffect } from 'react';
import { BsDisplay } from 'react-icons/bs';
import { NavLink as Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/dashboardAdmin.css';

const DashboardAdmin = () => {
  const [error, setError] = useState('');
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    getBrands();
  }, []);

  const getBrands = () => {
    axios.get('http://localhost:8000/brands').then(({ data }) => {
      setBrands(data);
    });
  };

  const deleteBrand = (id) => {
    axios.delete(`http://localhost:8000/brands/${id}`).then(({ data }) => {
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
        <table className="table-fixed min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th
                scope="col"
                className="p-4 text-left text-xs font-medium text-gray-500 uppercase"
              >
                id
              </th>
              <th
                scope="col"
                className="p-4 text-left text-xs font-medium text-gray-500 uppercase"
              >
                marque
              </th>
              <th
                scope="col"
                className="p-4 text-left text-xs font-medium text-gray-500 uppercase"
              >
                afficher
              </th>
              <th
                scope="col"
                className="p-4 text-left text-xs font-medium text-gray-500 uppercase"
              >
                modifier
              </th>
              <th
                scope="col"
                className="p-4 text-left text-xs font-medium text-gray-500 uppercase"
              >
                supprimer
              </th>
              <th
                scope="col"
                className="p-4 text-left text-xs font-medium text-gray-500 uppercase"
              >
                les paramètres
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {brands?.map((brand) => (
              <tr className="hover:bg-gray-100" key={brand.id}>
                <td className="p-4 w-4">{brand.id}</td>
                <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                  {brand.name}
                </td>
                <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                  <Link to={`/brands/${brand.slug}`} key={brand.id}>
                    <BsDisplay />
                  </Link>
                </td>
                <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                  <Link to={`/admin/updatebrand/${brand.id}`} key={brand.id}>
                    <button
                      type="button"
                      data-modal-toggle="product-modal"
                      className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center"
                    >
                      <svg
                        className="mr-2 h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
                        <path
                          fillRule="evenodd"
                          d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      Editer
                    </button>
                  </Link>
                </td>
                <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                  <button
                    onClick={() => deleteBrand(brand.id)}
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
                <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                  <Link to={`/admin/addparams/${brand.id}`} key={brand.id}>
                    <button
                      type="button"
                      data-modal-toggle="product-modal"
                      className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center"
                    >
                      <svg
                        className="-ml-1 mr-2 h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g transform="matrix(0.109615,0,0,0.109615,2.98466,2.98465)">
                          <path
                            fillRule="evenodd"
                            d="M111.56,49.38a49.68,49.68,0,0,0-11.12-19.23L104,14.05A63.91,63.91,0,0,0,87.27,4.38L75.11,15.51a49.58,49.58,0,0,0-22.21,0L40.73,4.38A63.91,63.91,0,0,0,24,14.05l3.56,16.09A49.68,49.68,0,0,0,16.44,49.38l-15.71,5a64.59,64.59,0,0,0,0,19.32l15.71,5A49.69,49.69,0,0,0,27.56,97.86L24,113.95a63.91,63.91,0,0,0,16.73,9.67l12.16-11.13a49.58,49.58,0,0,0,22.21,0l12.16,11.13A63.9,63.9,0,0,0,104,113.95l-3.56-16.09a49.68,49.68,0,0,0,11.12-19.23l15.71-5a64.6,64.6,0,0,0,0-19.32ZM64,86.67A22.67,22.67,0,1,1,86.67,64,22.67,22.67,0,0,1,64,86.67Z"
                            clipRule="evenodd"
                          ></path>
                        </g>
                      </svg>
                      Configurer
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default DashboardAdmin;
