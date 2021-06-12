import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productAction";
import { useParams } from "react-router";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const { productId } = useParams();

  const fetchProductDetail = async () => {
    try {
      const url = `https://fakestoreapi.com/products/${productId}`;
      const response = await axios.get(url);
      if (response.data) dispatch(selectedProduct(response.data));
    } catch (error) {
      console.log("error");
      console.log(error);
    }
  };

  useEffect(() => {
    if (productId) fetchProductDetail();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  return (
    <Fragment>
      <div className="card m-4 p-4">
        <div className="card-header">
          <h3>{product.title}</h3>
        </div>
        <div className="card-body">
          <div className="d-flex flex-wrap">
            <div className="image-container">
              <img
                src={product.image}
                alt={product.category}
                width="250"
                height="250"
              />
            </div>
            <div className="p-4">
              <p>{product.description}</p>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <div className="d-flex justify-content-between">
            <div className="font-weight-bold p-2">$ {product.price}</div>
            <div className="btn btn-info">Add to cart</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

ProductDetails.propTypes = {};

ProductDetails.defaultProps = {};

export default ProductDetails;
