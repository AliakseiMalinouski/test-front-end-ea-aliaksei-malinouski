import React from "react";
import { Snackbar, Alert } from "@mui/material";


export const Snack = React.memo(({isOpen, onClose, email}) => {
    return (
        <Snackbar open={isOpen} onClose={onClose} autoHideDuration={3000}>
            <Alert>
                The form has been successfully submitted to {email}
            </Alert>
        </Snackbar>
    )
})