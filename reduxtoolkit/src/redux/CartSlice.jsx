import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
}
const cartSlice = createSlice({
    name: "cart",
    initialState,  
    reducers: {
        addToCart: (state, action) => {
            console.log(state);
            console.log(action);
            // state.cart = [...state.cart, action.payload]
            state.cart.push(action.payload)
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item.name !== action.payload);
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;