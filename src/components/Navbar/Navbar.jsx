import React from 'react';
import { AppBar, ToolBar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icon';

const Navbar = () => {
    return (
        <div>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <ToolBar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={} alt="Test Website" height="25px" classNamw={classes.image} />
                        Test Website
                    </Typography>
                </ToolBar>
            </AppBar>
        </div>
    )
}

export default Navbar
