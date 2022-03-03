import { AppBar, IconButton, MenuItem, Toolbar, Typography } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

const classes = makeStyles();

const TopMenu = () => {
    return (
        <AppBar className={classes.AppBar}>
            <Toolbar>
                <IconButton>
                    <Menu />
                </IconButton>
                <MenuItem>
                    <Typography>
                        Home
                    </Typography>
                </MenuItem>
                <MenuItem>
                    <Typography>
                        About
                    </Typography>
                </MenuItem>
            </Toolbar>
        </AppBar>
    );
}

export default TopMenu;
