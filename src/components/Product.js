import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Product = ({ data }) => {
  const products = useSelector((state) => state.allProducts.products);
  const history = useHistory();
  const goToProduct = (productId) => {
    history.push(`/product/${productId}`);
  };

  return (
    <div className="product-items">
      <div className="d-flex flex-wrap justify-content-left">
        {products &&
          products.map((product) => (
            <div
              key={product.id}
              className="card"
              style={{ width: "320px", margin: "10px", padding: "5px", cursor: 'pointer' }}
              onClick={() => goToProduct(product.id)}
            >
              <div className="card-header">{product.title}</div>
              <div className="card-body">
                <div className="image-container">
                  <img
                    src={product.image}
                    alt={product.category}
                    width="250"
                    height="250"
                  />
                </div>
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-between">
                  <div className="font-weight-bold p-2">$ {product.price}</div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

Product.propTypes = {
  data: PropTypes.array.isRequired,
};

Product.defaultProps = {
  data: [],
};

export default Product;
