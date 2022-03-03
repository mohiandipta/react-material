import { AppBar, IconButton, MenuItem, Toolbar, Typography } from '@material-ui/core';
// import { Menu } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const TopMenu = () => {
    const classes = useStyles();
    return (
        <AppBar position='fixed' className={classes.AppBar}>
            <Toolbar>
                <IconButton
                    edge='start'
                    className={classes.menuButton}
                    color='inherit'
                    aria-label='menu'
                >
                    {/* <Menu /> */}
                </IconButton>
                <MenuItem>
                    <Typography variant='h6' className={classes.title}>
                        Home
                    </Typography>
                </MenuItem>
                <MenuItem>
                    <Typography variant='h6' className={classes.title}>
                        About
                    </Typography>
                </MenuItem>
            </Toolbar>
        </AppBar>
    );
}

export default TopMenu;
