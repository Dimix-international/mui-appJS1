import {AppBar, Badge, IconButton, Toolbar, Typography} from "@mui/material";
import {ShoppingBasket} from "@mui/icons-material";
import React from "react";

type HeaderType = {
    openBasket: () => void
    orderLength: number
}

export const Header: React.FC<HeaderType> = React.memo((props) => {

    const {openBasket, orderLength} = props;

    return (
        <AppBar position={'static'}>
            <Toolbar>
                <Typography
                    variant={'h6'}
                    component={'span'} /*конкретизируем каким тегом будет*/
                    sx={{
                        flexGrow: 1,
                    }} /*описываем стили, дает доступ к свойствам из темы*/
                >
                    MUI Shop
                </Typography>
                <IconButton
                    color={'inherit'}
                    onClick={openBasket}
                >
                    <Badge
                        color={'secondary'}
                        badgeContent={orderLength}
                    >
                        <ShoppingBasket/>
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
})