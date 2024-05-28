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
            state.cart = [...state.cart, action.payload]
        }
    }
})

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;