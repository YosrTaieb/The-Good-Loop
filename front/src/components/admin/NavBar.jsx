import { Link } from 'react-router-dom';

const NavBar = () => {
  const logout = () => {
    localStorage.clear();
    window.location.href = '/';
  };
  return (
    <nav className="absolute hidden z-20 h-full top-0 left-0 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75">
      <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex-1 px-3 bg-white divide-y space-y-1">
            <ul className="space-y-2 pb-2">
              <li>
                <Link
                  to="/admin"
                  className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                >
                  <svg
                    className="w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                  </svg>
                  <span className="ml-3">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/addbrand"
                  className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                >
                  <svg
                    className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g transform="matrix(0.721118,0,0,0.721118,-0.483258,-1.15029)">
                      <path
                        fillRule="evenodd"
                        d="M24.1,4L15.1,4C14.6,4 14.1,4.2 13.8,4.5L3.6,14.8C2.9,15.5 2.9,16.7 3.6,17.4L12.6,26.4C13.3,27.1 14.5,27.1 15.2,26.4L25.5,16.1C25.8,15.8 26,15.3 26,14.8L26,5.8C26,4.8 25.2,4 24.1,4ZM20,12C18.9,12 18,11.1 18,10C18,8.9 18.9,8 20,8C21.1,8 22,8.9 22,10C22,11.1 21.1,12 20,12Z"
                        clipRule="evenodd"
                      ></path>
                    </g>
                  </svg>
                  <span className="ml-3 flex-1 whitespace-nowrap">
                    Ajouter une marque
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/createweartype"
                  className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                >
                  <svg
                    className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g transform="matrix(0.296073,0,0,0.296073,-1.84292,-1.83725)">
                      <path
                        fillRule="evenodd"
                        d="M63.8,18.8C62.7,17.4 54.4,16.3 50.1,13C50.1,13 49.5,12.8 49.1,13.3C47,16.4 44.9,19 40,19C35.1,19 33,16.4 30.9,13.3C30.6,12.8 29.9,13 29.9,13C25.6,16.2 17.3,17.4 16.2,18.8C13.8,21.9 10.4,28.7 8.1,33.1C10.2,36.6 15,38.7 18.4,39C19.5,37.9 21.2,34.7 22.2,34.7C22.7,34.7 23.7,38.1 23.7,45.4C23.7,50.9 21.9,62 21.9,65.5C26.2,67.1 35,67 40,67C45,67 53.8,67.1 58.1,65.5C58.1,62 56.3,50.9 56.3,45.4C56.3,38.1 57.3,34.7 57.8,34.7C58.8,34.7 60.5,37.9 61.6,39C64.9,38.7 69.7,36.5 71.9,33.1C69.6,28.7 66.2,21.9 63.8,18.8Z"
                        clipRule="evenodd"
                      ></path>
                    </g>
                  </svg>
                  <span className="ml-3 flex-1 whitespace-nowrap">
                    Types de vêtements
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/createmorpho"
                  className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                >
                  <svg
                    className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g transform="matrix(0.0317803,0,0,0.0317803,1.86456,1.86512)">
                      <path
                        fillRule="evenodd"
                        d="M109.5,244.1L244.1,109.5L199.9,65.37L138.3,127.1C136.1,128.3 134.4,129.4 132.6,129.4C130.788,129.4 128.288,128.369 127.006,127.088L115.8,115.9C112.7,112.8 112.7,107.7 115.8,104.6L177.5,42.95L143.9,9.31C131.49,-3.08 111.4,-3.08 99.03,9.31L9.29,99.01C-3.08,111.4 -3.08,131.48 9.29,143.87L109.5,244.1ZM497.9,127.2C516.65,108.45 516.65,78.03 497.899,59.28L452.649,14.03C433.869,-4.74 403.459,-4.74 384.679,14.03L339.579,60.03L452.779,173.23L497.9,127.2ZM469.1,334.5L407.41,396.19C404.316,399.284 399.293,399.26 396.2,396.166L385.01,384.976C381.916,381.882 381.916,376.851 385.01,373.776L446.7,312.086L402.5,267.9L267.9,402.5L368.1,502.7C380.51,515.09 400.6,515.09 412.97,502.7L502.69,413C515.06,400.61 515.06,380.53 502.69,368.14L469.1,334.5ZM316.1,82.71L26.3,372.51C21.644,377.166 18.537,383.14 17.404,389.63L0.364,487.1C-2.169,501.59 10.454,514.2 24.944,511.66L122.474,494.56C128.952,493.425 134.924,490.321 139.574,485.67L429.374,195.87L316.1,82.71Z"
                        clipRule="evenodd"
                      ></path>
                    </g>
                  </svg>
                  <span className="ml-3 flex-1 whitespace-nowrap">
                    Styles morphologiques
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/createfabrication"
                  className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                >
                  <svg
                    className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g transform="matrix(0.0301751,0,0,0.0301751,1.30958,2.27518)">
                      <path
                        fillRule="evenodd"
                        d="M288,0C221.7,0 168,53.73 168,120C168,168.38 184.86,181.9 275.7,313.5C281.657,322.104 294.39,322.104 300.35,313.5C391.1,181.9 408,168.4 408,120C408,53.73 354.3,0 288,0ZM10.06,227.6C3.984,230 0,235.9 0,242.4L0,495.9C0,507.22 11.49,514.94 22,510.74L160,448L160,201.4C152.5,188.8 147.2,178 143.4,167.5L10.06,227.6ZM326.6,331.8C317.9,344.4 303.4,352 288,352C272.58,352 258.14,344.434 249.34,331.72C233.2,308.3 196.9,256.6 192,249.6L192,447.1L384,512L384,249.6C379.1,256.6 342.8,308.3 326.6,331.8ZM554.1,161.2L416,224L416,512L565.9,444.41C572,441.1 576,436.1 576,429.6L576,176C576,164.7 564.6,156.1 554.1,161.2Z"
                        clipRule="evenodd"
                      ></path>
                    </g>
                  </svg>
                  <span className="ml-3 flex-1 whitespace-nowrap">
                    Lieux de fabrication
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/createlocation"
                  className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                >
                  <svg
                    className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="ml-3 flex-1 whitespace-nowrap">
                    Lieux de vente
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/createmateriau"
                  className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                >
                  <svg
                    className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g transform="matrix(0.764511,0,0,0.764511,0.848264,0.816315)">
                      <path
                        fillRule="evenodd"
                        d="M20.6,5.7C20.6,5.5 20.5,5.4 20.4,5.3L12.3,0.6C12.2,0.5 12,0.5 11.8,0.6L3.6,5.3C3.5,5.4 3.4,5.5 3.4,5.7C3.4,5.9 3.5,6 3.6,6.1L11.7,10.8C11.8,10.8 11.9,10.9 11.9,10.9C11.9,10.9 12.1,10.9 12.1,10.8L20.2,6.1C20.5,6 20.6,5.8 20.6,5.7Z"
                        clipRule="evenodd"
                      ></path>
                      <path
                        fillRule="evenodd"
                        d="M10.6,13.2L2.5,8.5C2.3,8.4 2.1,8.4 2,8.5C1.9,8.6 1.8,8.8 1.8,8.9L1.8,18.3C1.8,18.5 1.9,18.6 2,18.7L10.1,23.4C10.2,23.4 10.3,23.5 10.3,23.5C10.3,23.5 10.5,23.5 10.5,23.4C10.6,23.3 10.7,23.2 10.7,23L10.7,13.6C10.9,13.4 10.8,13.3 10.6,13.2Z"
                        clipRule="evenodd"
                      ></path>
                      <path
                        fillRule="evenodd"
                        d="M22,8.5C21.9,8.4 21.7,8.4 21.5,8.5L13.4,13.2C13.3,13.3 13.2,13.4 13.2,13.6L13.2,23C13.2,23.2 13.3,23.3 13.4,23.4C13.5,23.4 13.6,23.5 13.6,23.5C13.6,23.5 13.8,23.5 13.8,23.4L21.9,18.7C22,18.6 22.1,18.5 22.1,18.3L22.1,8.9C22.2,8.8 22.1,8.6 22,8.5Z"
                        clipRule="evenodd"
                      ></path>
                    </g>
                  </svg>
                  <span className="ml-3 flex-1 whitespace-nowrap">
                    Matières
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/createquality"
                  className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                >
                  <svg
                    className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g transform="matrix(1,0,0,1,-1.99929,-1.99953)">
                      <path
                        fillRule="evenodd"
                        d="M9.362,9.158C9.362,9.158 6.202,9.508 4.094,9.742C3.904,9.765 3.736,9.892 3.673,10.085C3.61,10.278 3.673,10.479 3.813,10.606C5.379,12.035 7.732,14.175 7.732,14.175C7.73,14.175 7.086,17.288 6.658,19.365C6.622,19.553 6.69,19.752 6.854,19.871C7.017,19.99 7.227,19.992 7.392,19.899C9.236,18.851 11.998,17.275 11.998,17.275C11.998,17.275 14.761,18.851 16.602,19.9C16.77,19.992 16.98,19.99 17.143,19.871C17.307,19.752 17.375,19.553 17.338,19.366C16.91,17.288 16.267,14.175 16.267,14.175C16.267,14.175 18.62,12.035 20.186,10.609C20.326,10.478 20.388,10.277 20.326,10.085C20.264,9.893 20.096,9.766 19.906,9.744C17.798,9.508 14.637,9.158 14.637,9.158C14.637,9.158 13.327,6.26 12.454,4.328C12.372,4.155 12.2,4.034 11.998,4.034C11.796,4.034 11.623,4.156 11.545,4.328C10.671,6.26 9.362,9.158 9.362,9.158Z"
                        clipRule="evenodd"
                      ></path>
                    </g>
                  </svg>
                  <span className="ml-3 flex-1 whitespace-nowrap">
                    Qualités
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/createcriteria"
                  className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                >
                  <svg
                    className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g transform="matrix(0.180882,0,0,0.180882,1.31764,1.31755)">
                      <path
                        fillRule="evenodd"
                        d="M48,0C21.531,0 0,21.537 0,48.001C0,74.47 21.531,96.001 48,96.001C74.469,96.001 96,74.47 96,48.001C96,21.537 74.469,0 48,0ZM88.938,48.001C88.938,57.364 85.761,66.001 80.459,72.907C78.959,71.729 77.365,68.567 78.865,65.286C80.376,61.985 80.771,54.348 80.427,51.376C80.094,48.407 78.552,41.245 74.355,41.177C70.167,41.115 67.293,39.73 64.802,34.761C59.636,24.422 74.5,22.438 69.333,16.709C67.886,15.104 60.417,23.328 59.323,12.365C59.25,11.588 60,10.416 61,9.197C77.219,14.646 88.938,29.975 88.938,48.001ZM42.375,7.469C41.396,9.375 38.813,10.151 37.239,11.584C33.823,14.678 32.354,14.25 30.51,17.219C28.656,20.188 22.676,24.469 22.676,26.615C22.676,28.76 25.697,31.297 27.207,30.803C28.718,30.307 32.697,30.334 35.041,31.157C37.385,31.985 54.613,32.813 49.124,47.377C47.385,52.006 39.76,51.225 37.728,58.897C37.425,60.018 36.374,64.825 36.3,66.397C36.175,68.825 38.019,77.987 35.675,77.987C33.321,77.987 26.987,69.794 26.987,68.309C26.987,66.824 25.341,61.616 25.341,57.159C25.341,52.7 17.758,52.772 17.758,46.847C17.758,41.497 21.872,38.841 20.946,36.279C20.04,33.731 12.81,33.637 9.8,33.331C15.062,19.672 27.448,9.531 42.375,7.469ZM35.125,86.849C37.583,85.552 37.833,83.876 40.063,83.783C42.615,83.668 44.688,82.787 47.563,82.158C50.115,81.599 54.677,79.012 58.699,78.678C62.084,78.403 68.771,78.856 70.574,82.127C64.095,86.428 56.334,88.939 48.001,88.939C43.5,88.938 39.177,88.198 35.125,86.849Z"
                        clipRule="evenodd"
                      ></path>
                    </g>
                  </svg>
                  <span className="ml-3 flex-1 whitespace-nowrap">
                    Critères
                  </span>
                </Link>
              </li>
              <li>
                <button
                  onClick={() => logout()}
                  className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
                >
                  <svg
                    className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="ml-3 flex-1 whitespace-nowrap">
                    Déconnexion
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
