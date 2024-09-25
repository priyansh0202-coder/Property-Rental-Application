import React from 'react';
import { Button, Typography, Divider } from '@mui/material';
import { Link } from 'react-router-dom';

const Cart = ({ cart, removeFromCart }) => {
    const totalCost = cart.reduce((sum, property) => sum + property.price, 0);

    return (
        <div>
            <Typography variant="h4" gutterBottom>Your Cart</Typography>
            {cart.length === 0 ? (
                <Typography variant="body1">No properties added to the cart.</Typography>
            ) : (
                <div>
                    {cart.map((property) => (
                        <div key={property.id} style={{ marginBottom: '20px' }}>
                            <Typography variant="h6">{property.title}</Typography>
                            <Typography variant="body2">Location: {property.location[0].name}</Typography>
                            <Typography variant="body2">Price: ${property.price}</Typography>
                            <Button onClick={() => removeFromCart(property.id)} variant="contained" color="secondary">
                                Remove
                            </Button>
                            <Divider style={{ margin: '10px 0' }} />
                        </div>
                    ))}
                    <Typography variant="h5">Total Cost: ${totalCost}</Typography>
                    <Button component={Link} to="/checkout" variant="contained" color="primary">
                        Proceed to Checkout
                    </Button>
                </div>
            )}
        </div>
    );
};

export default Cart;
