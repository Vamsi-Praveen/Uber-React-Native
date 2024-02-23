import { configureStore } from "@reduxjs/toolkit";
import TravelReducer from "./features/navigationSlice";

export const store = configureStore({
    reducer: {
        travel: TravelReducer
    }
})