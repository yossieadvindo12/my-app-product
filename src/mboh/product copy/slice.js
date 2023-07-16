import { createSlice } from "@reduxjs/toolkit";
import { getAll, getDetail } from "./actions";

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
    },
    error: null,
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
