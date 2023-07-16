import { createSlice } from "@reduxjs/toolkit";
import { getCategory } from "./actions";

export const productCategory = createSlice({
  name: "productCategory",
  initialState: {
    loading: false,
    entities: [],
    error: null
},
  extraReducers: (builder) =>
    builder
      .addCase(getCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.entities = action.payload;
      })
      .addCase(getCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
});

export default productCategory.reducer;
