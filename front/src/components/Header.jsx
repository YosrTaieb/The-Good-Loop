import SearchBar from '../components/SearchBar';
import '../styles/header.css';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext.js';
import { MdDashboard } from 'react-icons/md';

const Header = () => {
  const { user } = useContext(UserContext);
  const [hamburgerOpened, setHamburgerOpened] = useState(false);
  const HandleHamburger = (e) => {
    e.preventDefault();
    setHamburgerOpened(!hamburgerOpened);
  };
  return (
    <>
      <header className={`header ${hamburgerOpened ? 'hamburger-opened' : ''}`}>
        <div className="header-container flex justify-between align-items-start">
          <Link to="/">
            <img className="header-img" src={logo} alt="The Good Loop" />
          </Link>
          <div
            onClick={HandleHamburger}
            onKeyPress={HandleHamburger}
            className="hamburger"
            role="button"
            tabIndex={0}
          >
            <span className="hamburger-span">&nbsp;</span>
            <span className="hamburger-span">&nbsp;</span>
            <span className="hamburger-span">&nbsp;</span>
            <span className="hamburger-span">&nbsp;</span>
          </div>
          <nav className="w-8/12 justify-end">
            <ul className="h-full flex flex-row justify-items-center items-center justify-between p-5">
              <li className="pl-5">
                <Link to="/participate">participer</Link>
              </li>
              <li className="pl-5">
                <Link to="/about">à propos</Link>
              </li>
              {Object.keys(user) == '' ||
                (user.role == 1 && (
                  <li className="pl-5">
                    <Link className="flex" to="/admin">
                      <MdDashboard className="header_login w-5" />
                      <span className="pl-2">admin</span>
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>
          {(Object.keys(user) == '' || user.role == 0) && (
            <>
              <p className="textHeader">
                Les marques qui se soucient de <br />
                la pla<span className="Headercircle yellow "></span>nète, des
                hum
                <span className="Headercircle blue "></span>ains, des anima
                <span className="Headercircle green "></span>ux,
                <br />
                et de toi.
              </p>
              <SearchBar />
            </>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
