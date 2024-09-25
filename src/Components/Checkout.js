import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';

const Checkout = ({ cart }) => {
    const [bookingDetails, setBookingDetails] = useState({
        name: '',
        email: '',
        paymentDetails: '',
    });

    const totalCost = cart.reduce((sum, property) => sum + property.price, 0);

    const handleChange = (e) => {
        setBookingDetails({ ...bookingDetails, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Booking confirmed!');
    };

    return (
        <div>
            <Typography variant="h4" gutterBottom>Checkout</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Name"
                    name="name"
                    value={bookingDetails.name}
                    onChange={handleChange}
                    fullWidth
                    style={{ marginBottom: '20px' }}
                />
                <TextField
                    label="Email"
                    name="email"
                    value={bookingDetails.email}
                    onChange={handleChange}
                    fullWidth
                    style={{ marginBottom: '20px' }}
                />
                <TextField
                    label="Payment Details"
                    name="paymentDetails"
                    value={bookingDetails.paymentDetails}
                    onChange={handleChange}
                    fullWidth
                    style={{ marginBottom: '20px' }}
                />
                <Typography variant="h5" gutterBottom>Total Cost: ${totalCost}</Typography>
                <Button type="submit" variant="contained" color="primary">
                    Confirm Booking
                </Button>
            </form>
        </div>
    );
};

export default Checkout;
