import React, {Fragment, useState} from 'react'
import PropTypes from 'prop-types'
import { useSelector } from "react-redux";

const Product = ({data}) => {
    
    const products = useSelector(state => state.allProducts.products)
    
    
    return (
        <Fragment>
            Content
        </Fragment>
    )
}

Product.propTypes = {
    data: PropTypes.array.isRequired
}

Product.defaultProps = {
    data: []
}

export default Product