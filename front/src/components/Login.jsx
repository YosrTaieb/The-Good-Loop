import { useState } from 'react';
import axios from 'axios';
import '../styles/login.css';

const Login = () => {
  const url = 'http://localhost:8000/security/login';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      const user = { email: email, password: password };
      axios.post(url, user).then(({ data }) => {
        if (data.error) setError(data.error);
        else {
          window.location.href = '/admin';
          localStorage.setItem('token', data.token);
          localStorage.setItem(`user`, JSON.stringify(data.user));
        }
      });
    } else {
      setError('Please enter email and password');
    }
  };

  return (
    <div className="login-block">
      <div className="login">
        <h2 className="login-h2 mt-1 text-center w-full z-10">Se connecter</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          {error && <p className="login-error">{error}</p>}
          <div className="form-group">
            <label htmlFor="email" className="label my-2 pt-4 mt-3">
              Email
            </label>
            <input
              type="text"
              className="inputForm appearance-none block w-full bg-white text-gray-700 rounded-lg py-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="email"
              id="email"
              value={email}
              placeholder="votre email"
              required="required"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="login-form-group">
            <label htmlFor="password" className="label my-3 pt-1 mt-6">
              Mot de passe
            </label>
            <input
              type="password"
              className="inputForm appearance-none block w-full bg-white text-gray-700 rounded-lg py-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="password"
              id="password"
              value={password}
              placeholder="votre mot de passe"
              required="required"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="login-button bg-white hover:bg-gray-100 text-black font-medium py-3 px-4 mt-3 mb-3 w-60"
          >
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
