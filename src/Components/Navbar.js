import React from 'react';
import { AppBar, Toolbar, Typography, Button, Badge, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount }) => {
    return (
        <AppBar position="sticky" style={{ backgroundColor: '#0288d1' }}>
            <Toolbar>

                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ display: { xs: 'block', md: 'none' }, marginRight: 2 }}
                >
                    <MenuIcon />
                </IconButton>

                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, color: '#fff', textAlign: { xs: 'center', md: 'left' } }}
                >
                    <Link to="/" style={{ color: "white" }}> Property Rental</Link>
                </Typography>

                <Button
                    color="inherit"
                    component={Link}
                    to="/"
                    sx={{ display: { xs: 'none', md: 'block' }, color: '#fff' }}
                >
                    Home
                </Button>

                <Button
                    color="inherit"
                    component={Link}
                    to="/cart"
                    sx={{ color: '#fff' }}
                >
                    <Badge badgeContent={cartCount} color="error">
                        Cart
                    </Badge>
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;

