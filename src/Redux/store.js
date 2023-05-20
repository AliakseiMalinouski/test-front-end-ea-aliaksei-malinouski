import {configureStore} from '@reduxjs/toolkit';
import anchorSlice from './anchorSlice';
import customSnackSlice from './customSnackSlice';


export const store = configureStore({
    reducer: {
        anchor: anchorSlice,
        customSnack: customSnackSlice
    }
})