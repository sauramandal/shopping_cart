import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setProducts } from "../redux/actions/productAction";
import Product from "./Product";

const ProductsListing = ({ data }) => {
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const url = "https://fakestoreapi.com/products";
    try {
      const response = await axios.get(url);
      dispatch(setProducts(response.data));
    } catch (error) {
      console.log("error");
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Fragment>
      <Product />
    </Fragment>
  );
};

ProductsListing.propTypes = {
  data: PropTypes.array.isRequired,
};

ProductsListing.defaultProps = {
  data: [],
};

export default ProductsListing;
