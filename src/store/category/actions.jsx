import { createAsyncThunk } from "@reduxjs/toolkit";
import { httpService } from "../../utils/service";

export const getCategory = createAsyncThunk("feat/getCategory", async () => {
  try {
    const response = await httpService.get("/products/category/");
    return response.data;
  } catch (error) {
    throw error;
  }
});
