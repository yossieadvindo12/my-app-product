import { createSlice } from "@reduxjs/toolkit";

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState: {
    loading: false,
    entities: [],
    error: null,
  },
  reducers: {
    addItem: (state, action) => {
      if (state.entities.length === 0) {
        state.entities = [action.payload];
      } else {
        const itemExist = state.entities.filter(
          (item) => item.id === action.payload.id
        );
        if (itemExist.length === 0) {
          state.entities = [...state.entities, action.payload];
        }
      }
    },
  },
});

export const { addItem } = checkoutSlice.actions;

export default checkoutSlice.reducer;
