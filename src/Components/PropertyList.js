import React, { Suspense, useEffect, useState } from 'react';
import axios from 'axios';
import { CircularProgress, Grid, Container, Box } from '@mui/material';
import Filters from './Filters';


const PropertyCard = React.lazy(() => import('./PropertyCard'))

const PropertyList = ({ addToCart }) => {
    const [properties, setProperties] = useState([]);
    console.log("hii", properties)
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState({});

    useEffect(() => {
        const fetchProperties = async () => {
            setLoading(true);
            try {
                const params = {
                    locationExternalIDs: filters.location || "5002,6020",
                    purpose: "for-rent",
                    hitsPerPage: "25",
                    page: "0",
                    lang: "en",
                    sort: "city-level-score",
                    categoryExternalID: '4',
                };

                if (filters.minPrice) params.priceMin = filters.minPrice;
                if (filters.maxPrice) params.priceMax = filters.maxPrice;
                if (filters.bedrooms) params.roomsMin = filters.bedrooms;

                const options = {
                    method: "GET",
                    url: 'https://bayut.p.rapidapi.com/properties/list',
                    params: params,
                    headers: {
                        'X-RapidAPI-Key': '4d7ce76670msh4dfc382644a284fp1b768fjsnc0b7b85d5c55',
                        'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
                    },
                };

                const response = await axios.request(options);
                setProperties(response.data.hits);
                setLoading(false);
            } catch (error) {
                console.error("Error while fetching the data: ", error);
                setLoading(false);
            }
        };
        fetchProperties();
    }, [filters]);


    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
    };

    return (
        <Box mt={5}>
            <Container>
                <Filters onFilterChange={handleFilterChange} />
                {loading ? (
                    <Box display="flex" justifyContent="center" alignItems="center" height="80vh">
                        <CircularProgress />
                    </Box>
                ) : (
                    <Grid container spacing={3} justifyContent={properties.length % 3 === 2 ? 'center' : 'flex-start'}>
                        {properties.map((property, id) => (
                            <Suspense fallback={<div>Fetching...</div>}>
                                <PropertyCard key={property.id} property={property} addToCart={addToCart} />
                            </Suspense>
                        ))}
                    </Grid>
                )}
            </Container>
        </Box>
    );
};

export default PropertyList;
