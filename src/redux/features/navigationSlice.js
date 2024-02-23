import { createSlice } from "@reduxjs/toolkit";

const navigationSlice = createSlice({
    initialState: {
        origin: null,
        destination: null,
        travelTimeInfo: null
    },
    name: "travel",
    reducers: {
        setOrigin: (state, action) => {
            state.origin = action.payload;
        },
        setDestination: (state, action) => {
            state.destination = action.payload;
        },
        setTravelInfo: (state, action) => {
            state.travelTimeInfo = action.payload;
        },

    }
})
//actions
export const { setOrigin, setDestination, setTravelInfo } = navigationSlice.actions;

//selectors

export const selectOrigin = (state) => state.travel.origin
export const selectDestination = (state) => state.travel.destination
export const selectTravelTime = (state) => state.travel.travelTimeInfo

//reducer

export default navigationSlice.reducer