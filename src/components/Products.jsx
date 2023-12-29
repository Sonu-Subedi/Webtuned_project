import { product1 } from "../helpers/common";
import { product2 } from "../helpers/common";
import { product5 } from "../helpers/common";
import { product6 } from "../helpers/common";
import { product7 } from "../helpers/common";
import { product8 } from "../helpers/common";
import { product9 } from "../helpers/common";
import { product3 } from "../helpers/common";
import PropTypes from "prop-types";
import { subbanner } from "../helpers/common";
import { catbanner1 } from "../helpers/common";
import { catbanner2 } from "../helpers/common";

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
    {
      name: "Product 5",
      description: "Description for Product 3",
      price: 361.99,
      image: product7,
    },
    {
      name: "Product 3",
      description: "Description for Product 3",
      price: 361.99,
      image: product8,
    },
    {
      name: "Product 3",
      description: "Description for Product 3",
      price: 361.99,
      image: product9,
    },
    {
      name: "Product 3",
      description: "Description for Product 3",
      price: 361.99,
      image: product3,
    },
  ];

  return (
    <>
      <div className="main-heading">top Products</div>
      <div className="cards-container">
        <div className="product-list">
          {products.map((product, index) => (
            <Product key={index} {...product} className="card" />
          ))}
        </div>
      </div>
      <div className="subbanner">
        <img src={subbanner} alt="subbaner" />
      </div>
      <div className="subbanner__cat-banner">
        <div className="subbanner__cat-banner1">
          <img src={catbanner1} alt="catbanner1" />
          <div className="catbannertext">
            <span className="catbannertext1">20% save</span>
            <span className="catbannertext2">Diamond Earrings</span>
            <span className="catbannertext3">
              The many variations of jewellery
            </span>
            <a className="catbannerbtn" href="#">
              shop now
            </a>
          </div>
        </div>
        <div className="subbanner__cat-banner2">
          <img src={catbanner2} alt="catbanner2" />
          <div className="catbannertext">
            <span className="catbannertext1">20% save</span>
            <span className="catbannertext2">Diamond Earrings</span>
            <span className="catbannertext3">
              The many variations of jewellery
            </span>
            <a className="catbannerbtn" href="#">
              shop now
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
