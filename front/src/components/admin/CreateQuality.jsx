import { useState } from 'react';
import axios from 'axios';

const url = 'http://localhost:8000/quality/';

const CreateQuality = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newQuality = { name: name };
      axios.post(url, newQuality).then(({ data }) => {
        if (data.error) setError(data.error);
        else {
          setError('');
          setName('');
          window.location.reload();
        }
      });
    } else setError('All fields are required');
  };
  return (
    <div className="createQuality">
      <div>
        <div className="px-5 py-5 md:grid md:grid-cols-3 md:gap-6">
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form onSubmit={handleSubmit}>
              {error && <p className="register-error">{error}</p>}
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                    <h2 className="mb-5 text-lg font-medium leading-6 text-gray-900">
                      Créer ou supprimer une qualité
                    </h2>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium font-bold text-gray-700"
                    >
                      Nom
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="mt-3 border border-gray-300 px-2 py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="px-5 py-5 bg-white text-right sm:px-6">
                    <button
                      type="submit"
                      value="Send"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Enregistrer
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateQuality;
