import React from "react";
import {Alert, Snackbar} from "@mui/material";

type SnackType = {
    isOpenSnack:boolean
    onCloseSnack:() => void
}
export const Snack:React.FC<SnackType> = React.memo(props => {

    const {isOpenSnack, onCloseSnack} = props;
    return (
        <Snackbar
            open={isOpenSnack}
            onClose={onCloseSnack}
            autoHideDuration={3000}
        >
            <Alert severity={'success'}>
                Товар добавлен в корзину!
            </Alert>
        </Snackbar>
    )
})