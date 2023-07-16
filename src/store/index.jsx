import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./product/slice";
import  productCategoryReducer  from "./category/slice";
import  checkoutReducer from "./checkout/slice";

export default configureStore({
  reducer: {
    product: productReducer,
    productCategory: productCategoryReducer,
    checkout: checkoutReducer
  },
});
