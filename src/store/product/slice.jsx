import { createSlice } from "@reduxjs/toolkit";
import { getAll, getDetail, getProductElectronics, getProductJewelery, getProductMens, getProductWomans } from "./actions";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    entities: [],
    entity: {
      createdAt: "",
      title: "",
      image: "",
      description: "",
      price: "",
      category:"",
    },
    error: null
},
  extraReducers: (builder) =>
    builder
      .addCase(getAll.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAll.fulfilled, (state, action) => {
        state.loading = false;
        state.entities = action.payload;
      })
      .addCase(getAll.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getProductMens.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductMens.fulfilled, (state, action) => {
        state.loading = false;
        state.entities = action.payload;
      })
      .addCase(getProductMens.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getProductWomans.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductWomans.fulfilled, (state, action) => {
        state.loading = false;
        state.entities = action.payload;
      })
      .addCase(getProductWomans.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getProductJewelery.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductJewelery.fulfilled, (state, action) => {
        state.loading = false;
        state.entities = action.payload;
      })
      .addCase(getProductJewelery.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getProductElectronics.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductElectronics.fulfilled, (state, action) => {
        state.loading = false;
        state.entities = action.payload;
      })
      .addCase(getProductElectronics.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getDetail.pending, (state) => {
        state.loading = true;
      })
      .addCase(getDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.entity = action.payload;
      })
      .addCase(getDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});

export default productSlice.reducer;
