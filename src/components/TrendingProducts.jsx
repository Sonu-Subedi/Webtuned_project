import { product1 } from "../helpers/common";
import { product2 } from "../helpers/common";
import { product5 } from "../helpers/common";
import { product6 } from "../helpers/common";

import PropTypes from "prop-types";

const Product = ({ name, description, price, image }) => (
  <div className="product">
    <img src={image} alt={name} />
    <div className="product-details">
      <h3>{name}</h3>
      <p>{description}</p>
      <span>${price}</span>
    </div>
  </div>
);

Product.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};
const ProductList = () => {
  const products = [
    {
      name: "Product 1",
      description: "Description for Product 1",
      price: 361.99,
      image: product1,
    },
    {
      name: "Product 2",
      description: "Description for Product 2",
      price: 361.99,
      image: product2,
    },
    {
      name: "Product 3",
      description: "Description for Product 3",
      price: 361.99,
      image: product5,
    },
    {
      name: "Product 4",
      description: "Description for Product 3",
      price: 361.99,
      image: product6,
    },
  ];

  return (
    <>
      <div className="main-heading">Trending Products</div>
      <div className="cards-container">
        <div className="product-list">
          {products.map((product, index) => (
            <Product key={index} {...product} className="card" />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
