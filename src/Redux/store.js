import {configureStore} from '@reduxjs/toolkit';
import anchorSlice from './anchorSlice';


export const store = configureStore({
    reducer: {
        anchor: anchorSlice
    }
})