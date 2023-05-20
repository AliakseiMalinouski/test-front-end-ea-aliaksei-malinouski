import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    snack: false
}

export const customSnackSlice = createSlice({
    name: "customSnack",
    initialState,
    reducers: {
        updateStateCustomSnack: (state, action) => {
            state.snack = !state.snack;
        }
    }
})

export const {updateStateCustomSnack}= customSnackSlice.actions;
export default customSnackSlice.reducer;