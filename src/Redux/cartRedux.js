import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        totalPrice: 0,
    },
    reducers: {
        addProducts: (state, action) => {
            state.products.push(action.payload);
            state.quantity += 1;
            state.totalPrice += action.payload.price * action.payload.quantity; 
        },
    }
})

export const {addProducts} = cartSlice.actions;
export default cartSlice.reducer; 