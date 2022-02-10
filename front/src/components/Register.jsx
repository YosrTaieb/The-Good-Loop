import { useState } from 'react';
import axios from 'axios';
import '../styles/register.css';

const url = 'http://localhost:8000/security/signup';
const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      const newUser = { email: email, password: password };
      axios.post(url, newUser).then(({ data }) => {
        if (data.error) setError(data.error);
        else {
          setError('');
          setEmail('');
          setPassword('');
        }
      });
    } else setError('All fields are required');
  };

  return (
    <div className="register-block">
      <div className="register">
        <h2 className="register-h2 mt-1 text-center w-full z-10">
          S&apos;enregistrer
        </h2>
        <form className="register-form" onSubmit={handleSubmit}>
          {error && <p className="register-error">{error}</p>}
          <div className="form-group">
            <label className="label my-2 pt-4 mt-3" htmlFor="email">
              Email
            </label>
            <input
              className="inputForm appearance-none block w-full bg-white text-gray-700 rounded-lg py-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              name="email"
              id="email"
              value={email}
              placeholder="votre email"
              required="required"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="register-form-group">
            <label className="label my-3 pt-1 mt-6" htmlFor="password">
              Mot de passe
            </label>
            <input
              className="inputForm appearance-none block w-full bg-white text-gray-700 rounded-lg py-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="password"
              name="password"
              id="password"
              value={password}
              placeholder="votre mot de passe"
              required="required"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="register-button bg-white hover:bg-gray-100 text-black font-medium py-3 px-4 mt-3 mb-3 w-60"
              type="submit"
              value="Send"
            >
              S&apos;enregistrer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
