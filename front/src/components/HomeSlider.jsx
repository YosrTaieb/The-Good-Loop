import { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import { NavLink as Link } from 'react-router-dom';
import BrandContext from '../contexts/BrandContext';
import BrandCard from './BrandCard';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';
import '../styles/homeSlider.css';

SwiperCore.use([Navigation]);

const HomeSlider = () => {
  const { brands } = useContext(BrandContext);
  return (
    <div className="m-10">
      <div className="homeslider">
        <h2 className="my-5 pl-20">Les marques</h2>
        <div className="homeslider-slider">
          <div className="flex flex-row justify-between justify-items-center">
            <Swiper
              breakpoints={{
                425: {
                  slidesPerView: 2,
                  spaceBetween: -26,
                  slidesPerGroup: 2,
                },
                585: {
                  slidesPerView: 2,
                  spaceBetween: -50,
                  slidesPerGroup: 2,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: -30,
                  slidesPerGroup: 3,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: -45,
                  slidesPerGroup: 4,
                },
                1220: {
                  slidesPerView: 4,
                  spaceBetween: -45,
                  slidesPerGroup: 4,
                },
                1350: {
                  slidesPerView: 5,
                  spaceBetween: -65,
                  slidesPerGroup: 5,
                },
                1700: {
                  slidesPerView: 6,
                  spaceBetween: -80,
                  slidesPerGroup: 6,
                },
                2000: {
                  slidesPerView: 6,
                  spaceBetween: -110,
                  slidesPerGroup: 6,
                },
              }}
              loop={false}
              navigation={true}
              className="mySwiper"
            >
              {brands
                ?.filter(
                  (brand) =>
                    brand.criterias.animal === 5 ||
                    brand.criterias.environnement === 5 ||
                    brand.criterias.humain === 5
                )
                .map((brand) => (
                  <SwiperSlide key={brand.id}>
                    <BrandCard brand={brand} />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="homeslider-button">
        <Link to={`/brands/`}>
          <button className="flex border-4 py-2 px-6 focus:outline-none rounded-full">
            Afficher tout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeSlider;
