import { NavLink as Link } from 'react-router-dom';
import '../styles/brandCard.css';

const BrandCard = ({ brand }) => {
  return (
    <div className="brandcard">
      <div className="relative flex flex-col justify-center justify-items-center items-center content-center w-48 h-48">
        <Link to={`/brands/${brand.slug}`} key={brand.id}>
          <span
            className={
              brand.criterias?.environnement === 5
                ? 'brandcard-environnement'
                : ''
            }
          ></span>
          <span
            className={brand.criterias?.humain === 5 ? 'brandcard-humain' : ''}
          ></span>
          <span
            className={brand.criterias?.animal === 5 ? 'brandcard-animal' : ''}
          ></span>
          <img
            className="border-solid border-2 border-black rounded-full w-40 h-40 cursor-pointer"
            src={brand.image}
            alt={brand.name}
          />
        </Link>
        <h3>{brand.name}</h3>
      </div>
    </div>
  );
};

export default BrandCard;
