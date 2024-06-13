import './FeaturedProducts.scss';

const FeaturedProducts = ({ type }) => {
  // Return to this component when implementing Strapi
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad quia odio
          mollitia eius veniam neque velit ullam tempore adipisci! Ab ea culpa
          eveniet quidem pariatur quibusdam quia nostrum sequi cumque!
        </p>
      </div>
      <div className="bottom"></div>
    </div>
  );
};

export default FeaturedProducts;
