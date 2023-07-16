import { createAsyncThunk } from "@reduxjs/toolkit";
import { httpService } from "../../utils/service";

export const getAll = createAsyncThunk("feat/getAll", async () => {
  try {
    const response = await httpService.get("/products");
    return response.data;
  } catch (error) {
    throw error;
  }
});
export const getProductMens = createAsyncThunk("feat/getProductMens", async () => {
  try {
    const response = await httpService.get("/products/category/men's clothing");
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const getProductWomans = createAsyncThunk("feat/getProductWomans", async () => {
  try {
    const response = await httpService.get("/products/category/women's clothing");
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const getProductJewelery = createAsyncThunk("feat/getProductJewelery", async () => {
  try {
    const response = await httpService.get("/products/category/jewelery");
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const getProductElectronics = createAsyncThunk("feat/getProductElectronics", async () => {
  try {
    const response = await httpService.get("/products/category/electronics");
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const getDetail = createAsyncThunk(
  "feat/getProduct",
  async (productId) => {
    try {
      const response = await httpService.get(`/products/${productId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
