import React from "react";
import {CircularProgress} from '@mui/material';

export const Progress = () => {
    return <CircularProgress sx={{
        position: 'absolute',
        top: "20%",
        left: '50%'
    }}/>
}