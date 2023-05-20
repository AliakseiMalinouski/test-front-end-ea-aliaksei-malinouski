import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    anchorState: 0
}

export const anchorSlice = createSlice({
    name: "anchor",
    initialState,
    reducers: {
        updateAnchorState: (state) => {
            state.anchorState = !state.anchorState;
        }
    }
});

export const {updateAnchorState} = anchorSlice.actions;
export default anchorSlice.reducer;