import './Card.scss';
import { Link } from 'react-router-dom';

// Return to component when implementing strapi
const Card = () => {
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          <img className="mainImg" src="" alt="" />
          <img className="secondImg" src="" alt="" />
        </div>
        <h2></h2>
        <div className="prices">
          <h3></h3>
          <h3></h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
