import React from "react";
import {
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText, Typography
} from "@mui/material";
import {ShoppingBasket} from "@mui/icons-material";
import BasketItem from "./BasketItem";

type ItemType = {
    id: string,
    category: string,
    name: string,
    poster: string,
    price: number,
}
type BasketType = {
    order: Array<any>,
    removeFromOrder: () => void
    cartOpen: boolean
    closeCart: () => void
}

export const Basket: React.FC<BasketType> = React.memo(props => {

    const {order = [], removeFromOrder, cartOpen, closeCart} = props;

    return (
        <Drawer
            anchor={'right'}
            open={cartOpen}
            onClose={closeCart}
        >
            <List sx={{width: '350px'}}>
                <ListItem>
                    <ListItemIcon>
                        <ShoppingBasket/>
                    </ListItemIcon>
                    <ListItemText primary={'Корзина'}/>
                </ListItem>
                <Divider/>

                {
                    !order.length ? (
                            <ListItem>Корзина пуста!</ListItem>
                        )
                        : (
                            <>
                                {order.map(item => (
                                    <BasketItem
                                        key={item.name}
                                        removeFromOrder={removeFromOrder}
                                        {...item}
                                    />
                                ))}
                                <Divider />
                                <ListItem>
                                    <Typography sx={{fontWeight: 700}}>
                                        Общая стоимость: {' '}
                                        {
                                            order.reduce((acc, item) => {
                                                return acc + item.price * item.quantity
                                            },0)
                                        }{' '} рублей.
                                    </Typography>
                                </ListItem>
                            </>
                        )
                }
            </List>
        </Drawer>
    )
})