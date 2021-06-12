import { SET_PRODUCTS } from "../constants/action-types";

const initialState = {
  products: [
    {
      id: 1,
      title: "Cracking the coding interview",
      category: "Books",
    },
  ],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};
