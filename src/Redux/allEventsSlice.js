import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allEvents: []
}

export const allEventsSlice = createSlice({
    name: "allEvents",
    initialState,
    reducers: {
        setAllEvents: (state, action) => {
            state.allEvents = action.payload;
        }
    }
});

export const {setAllEvents} = allEventsSlice.actions;
export default allEventsSlice.reducer;