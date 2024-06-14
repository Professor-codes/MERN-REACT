import { configureStore } from "@reduxjs/toolkit";
import contentSlice from "./redux/ContentSlice";

export const store = configureStore({
    reducer: {
        content: contentSlice,
    }
})