// eslint-disable-next-line arrow-body-style
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About.jsx';
import Brand from './components/Brand.jsx';
import BrandContext from './contexts/BrandContext.js';
import { AuthContext } from './contexts/AuthContext.js';
import { UserContext } from './contexts/UserContext.js';
import Brands from './components/Brands.jsx';
import DashboardAdmin from './components/DashboardAdmin.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Connection from './components/Connection.jsx';
import Participate from './components/Participate.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import AddBrand from './components/admin/AddBrand.jsx';

import GlobalWeartype from './components/admin/GlobalWeartype.jsx';
import GlobalMorpho from './components/admin/GlobalMorpho.jsx';
import GlobalFabrication from './components/admin/GlobalFabrication.jsx';
import GlobalLocation from './components/admin/GlobalLocation.jsx';
import GlobalMateriau from './components/admin/GlobalMateriau.jsx';
import GlobalQuality from './components/admin/GlobalQuality.jsx';
import GlobalCriteria from './components/admin/GlobalCriteria.jsx';

import UpdateBrand from './components/admin/UpdateBrand.jsx';
import AddParams from './components/admin/AddParams.jsx';

import axios from 'axios';
import { useEffect, useState } from 'react';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  const [brands, setBrands] = useState([]);

  useEffect(() => {
    getBrands();
    getUser();
  }, []);

  const getBrands = () => {
    axios.get('http://localhost:8000/brands').then(({ data }) => {
      setBrands(data.filter((brand) => !brand.archived));
    });
  };

  const getUser = () => {
    const token = localStorage.getItem('token');
    if (token) {
      axios
        .get('http://localhost:8000/admin/', {
          headers: {
            'x-access-token': token,
          },
        })
        .then(({ data }) => {
          if (data.auth) {
            setIsAuthenticated(true);
            setUser(JSON.parse(localStorage.getItem('user')));
          }
        })
        .catch(() => {
          localStorage.removeItem('token');
        });
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <UserContext.Provider value={{ user, setUser }}>
        <BrandContext.Provider value={{ brands: brands }}>
          <Router>
            <Header />
            <main id="main" className="site-main" role="main">
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/brands/" element={<Brands />} />
                <Route exact path="/brands/:slug" element={<Brand />} />
                <Route exact path="/participate" element={<Participate />} />
                <Route path="/connection" element={<Connection />} />
                <Route path="/admin" element={<ProtectedRoute />}>
                  <Route path="/admin" element={<DashboardAdmin />} />
                  <Route path="/admin/addbrand" element={<AddBrand />} />
                  <Route
                    path="/admin/createweartype"
                    element={<GlobalWeartype />}
                  />
                  <Route
                    path="/admin/createmorpho"
                    element={<GlobalMorpho />}
                  />
                  <Route
                    path="/admin/createfabrication"
                    element={<GlobalFabrication />}
                  />
                  <Route
                    path="/admin/createlocation"
                    element={<GlobalLocation />}
                  />
                  <Route
                    path="/admin/createmateriau"
                    element={<GlobalMateriau />}
                  />
                  <Route
                    path="/admin/createquality"
                    element={<GlobalQuality />}
                  />
                  <Route
                    path="/admin/createcriteria"
                    element={<GlobalCriteria />}
                  />
                  <Route
                    path="/admin/updatebrand/:id"
                    element={<UpdateBrand />}
                  />
                  <Route path="/admin/addparams/:id" element={<AddParams />} />
                </Route>
              </Routes>
            </main>
            <Footer />
          </Router>
        </BrandContext.Provider>
      </UserContext.Provider>
    </AuthContext.Provider>
  );
};

export default App;
