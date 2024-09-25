import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Grid } from '@mui/material';

const PropertyCard = ({ property, addToCart }) => {
    // console.log(property)
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card
                style={{
                    margin: '15px',
                    backgroundColor: '#fff',
                    borderRadius: '12px',
                    boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.3s ease-in-out',
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                }}
            >
                <CardMedia
                    component="img"
                    height="200"
                    image={property.coverPhoto?.url || 'default.jpg'}
                    alt={property.title}
                    style={{ borderRadius: '12px 12px 0 0' }}
                />
                <CardContent>
                    <Typography
                        variant="h6"
                        style={{ fontWeight: 600, color: '#333', marginBottom: '10px' }}
                    >
                        {property.title.length > 40 ? property.title.slice(0, 40) + "..." : property.title}
                    </Typography>
                    <Typography variant="body2" style={{ color: '#757575', marginBottom: '5px' }}>
                        {property.location[0].name}
                    </Typography>
                    <Typography variant="body2" style={{ color: '#0288d1', fontWeight: 500, marginBottom: '5px' }}>
                        ${property.price} per month
                    </Typography>
                    <Typography variant="body2" style={{ color: '#757575', marginBottom: '15px' }}>
                        {property.rooms ? property.rooms : 2} rooms, {property.baths} baths
                    </Typography>
                    <Typography variant="body2" style={{ marginBottom: '15px', textDecorationColor: "black" }}>
                        Amenities - {property.amenities.slice(0, 4).join(", ")}
                    </Typography>
                    <Button
                        onClick={() => addToCart(property)}
                        variant="contained"
                        color="primary"
                        style={{ width: '100%', backgroundColor: '#0288d1', color: '#fff' }}
                    >
                        Book Now
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default PropertyCard;



