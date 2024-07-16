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
        addSingleProduct: (state, action) => {
            let index = state.products.findIndex((item) => item._id === action.payload);
            state.products[index].quantity += 1;
            state.totalPrice += state.products[index].price;
        },
        removeSingleProduct: (state, action) => {
            let index = state.products.findIndex((item) => item._id === action.payload);
            state.totalPrice -= state.products[index].price;
            if(state.products[index].quantity > 1){
                state.products[index].quantity -= 1;
            }else{
                state.products.splice(index, 1);
                state.quantity -= 1;
            }
        }
    }
})

export const {addProducts, addSingleProduct, removeSingleProduct} = cartSlice.actions;
export default cartSlice.reducer; 