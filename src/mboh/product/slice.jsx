import { createSlice } from '@reduxjs/toolkit'
import { getAll } from './action'

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        loading: false,
        entities: [],
        entity: {
            title: '',
            price: '',
            description: '',
            category: '',
            image: '',
            rating: {
                rate: '',
                count: ''
            },
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
                state.entities = action.payload;
            })
})
export default productSlice.reducer;