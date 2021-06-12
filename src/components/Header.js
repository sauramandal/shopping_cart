import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

const Header = ({ data }) => {
  return (
    <div className="">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Shop
        </a>
      </nav>
    </div>
  );
};
Header.propTypes = {
  data: PropTypes.array.isRequired,
};
Header.defaultProps = {
  data: [],
};
export default Header;
