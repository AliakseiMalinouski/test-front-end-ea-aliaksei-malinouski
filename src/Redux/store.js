import {configureStore} from '@reduxjs/toolkit';
import anchorSlice from './anchorSlice';
import customSnackSlice from './customSnackSlice';
import allEventsSlice from './allEventsSlice';


export const store = configureStore({
    reducer: {
        anchor: anchorSlice,
        customSnack: customSnackSlice,
        allEvents: allEventsSlice
    }
})