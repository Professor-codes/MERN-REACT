import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    amount: 0,
}

const bankSlice = createSlice({
    name: "bank",
    initialState,
    reducers: {
        depositeMoney: (state, action) => {
            // state - initial state
            // action - type, payload
            // type - bank/deposite

            return state = { ...state, amount: state.amount + action.payload }
        },
        withdrawMoney: (state, action) => {
            return state = { ...state, amount: state.amount - action.payload }
        }
    }
})

export const { depositeMoney, withdrawMoney } = bankSlice.actions
export default bankSlice.reducer