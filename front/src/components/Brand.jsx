import '../styles/brand.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BrandCard from './BrandCard';
import Weartype from './Weartype';
import axios from 'axios';

const Brand = () => {
  const params = useParams();
  const [brand, setBrand] = useState([]);
  const [rates, setRates] = useState(0);

  useEffect(() => {
    getBrand();
    getRates();
  }, [params.slug]);

  const getBrand = () => {
    axios
      .get(`http://localhost:8000/brands/${params.slug}`)
      .then((response) => {
        setBrand(response.data);
      });
  };

  const getRates = () => {
    axios
      .get(`http://localhost:8000/criterias/rates/count`)
      .then((response) => {
        setRates(response.data);
      });
  };

  return (
    <section className="brand text-gray-700 body-font overflow-hidden bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/3 w-full object-cover object-center">
            <BrandCard brand={brand} />
          </div>
          <div className="lg:w-2/3 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-gray-900 mb-10 text-3xl title-font font-medium mb-1 ml-5 hidden">
              {brand.name}
            </h1>
            <img
              className="logo_brand pb-10 max-w-fit max-h-fit min-w-fit min-h-fit"
              src={brand.logo}
              alt="Logo"
            />
            <p className="pres leading-relaxed mb-10">{brand.description}</p>
            {brand.criterias && Object.values(brand.criterias)[0] && (
              <>
                <h2 className="font-x-small italic uppercase mb-5 ml-5">
                  Les critères sur lesquels {brand.name} s’engagent :
                </h2>
                <ul className="leading-relaxed mb-10">
                  {Object.entries(brand.criterias).map(([criteria, rate]) => (
                    <li
                      className="brand-rates flex items-center mb-5"
                      key={criteria.key}
                    >
                      <div className="brand-rates-container relative mr-5">
                        <div className="brand-rates-rate absolute">
                          {[...Array(rate)].map((e, i) => (
                            <span
                              className={`${criteria} bg-current inline-block rounded-full mr-2 w-6 h-6`}
                              key={i}
                            >
                              &nbsp;
                            </span>
                          ))}
                        </div>
                        <div className="brand-rates-placeholder">
                          {[...Array(rates)].map((e, i) => (
                            <span
                              className={`${criteria} inline-block rounded-full border-4 mr-2 w-6 h-6`}
                              key={i}
                            >
                              &nbsp;
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="uppercase italic">{criteria}</p>
                    </li>
                  ))}
                </ul>
              </>
            )}
            {brand.weartypes && Object.values(brand.weartypes)[0] && (
              <>
                <h3 className="font-medium italic uppercase mb-5 ml-10">
                  Ils proposent :
                </h3>
                <div className="homefilter_block">
                  {Object.entries(brand.weartypes).map(([weartype, image]) => (
                    <Weartype
                      key={weartype.id}
                      weartype={{
                        name: weartype.split(',')[0],
                        slug: weartype.split(',')[1],
                        image: image,
                      }}
                    />
                  ))}
                </div>
              </>
            )}
            <div className="shop_button flex justify-center mt-10">
              <button
                className="flex border-4 py-2 px-6 focus:outline-none rounded-full"
                onClick={() =>
                  (window.open(`${brand.link}`, '_blank').opener = null)
                }
              >
                Le shop
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brand;
