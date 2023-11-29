import React from 'react'
import Button from '../../ui/Button'
import { useDispatch } from 'react-redux'
import { deleteFromCart } from './cartSlice';

const DeleteItem = ({ pizzaId }) => {
    const dispatch = useDispatch();
    return (
        <Button type="small" onClick={() => dispatch(deleteFromCart(pizzaId))}>Delete</Button>
    )
}

export default DeleteItem