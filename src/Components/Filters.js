import React, { useState } from 'react';
import { TextField, Button, MenuItem, Grid } from '@mui/material';

const Filters = ({ onFilterChange }) => {
    const [filters, setFilters] = useState({
        location: '',
        minPrice: '',
        maxPrice: '',
        bedrooms: '',
    });

    const validLocations = [
        { name: 'UAE', id: '5002' },
        { name: 'Dubai', id: '6020' },
        { name: 'Abu Dhabi', id: '6030' },
    ];

    const handleChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    const applyFilters = () => {
        onFilterChange(filters);
    };

    return (
        <Grid container spacing={3} style={{ marginBottom: '20px' }}>
            <Grid item xs={12} sm={6} md={3}>
                <TextField
                    label="Location"
                    name="location"
                    value={filters.location}
                    onChange={handleChange}
                    select
                    fullWidth
                >
                    {validLocations.map((location) => (
                        <MenuItem key={location.id} value={location.id}>
                            {location.name}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <TextField
                    label="Min Price"
                    name="minPrice"
                    type="number"
                    value={filters.minPrice}
                    onChange={handleChange}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <TextField
                    label="Max Price"
                    name="maxPrice"
                    type="number"
                    value={filters.maxPrice}
                    onChange={handleChange}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <TextField
                    label="Bedrooms"
                    name="bedrooms"
                    value={filters.bedrooms}
                    onChange={handleChange}
                    select
                    fullWidth
                >
                    <MenuItem value="">All</MenuItem>
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                    <MenuItem value="4">4</MenuItem>
                    <MenuItem value="5">5+</MenuItem>
                </TextField>
            </Grid>
            <Grid item xs={12}>
                <Button onClick={applyFilters} variant="contained" color="primary" fullWidth>
                    Apply Filters
                </Button>
            </Grid>
        </Grid>
    );
};

export default Filters;
