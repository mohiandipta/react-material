import { Avatar, Drawer, Grid, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

const SideMenu = () => {

    const classes = makeStyles();

    return (
        <Drawer
            open={true}
            variant='permanent'
            anchor='left'
            className={classes.drawer}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <Grid container justify='center' alignItems='center'>
                <Avatar
                    src='https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg'
                    className={classes.bigAvatar}
                />
            </Grid>
            <List>
                {['Profile', 'Sign Out'].map((text, index) => (
                    <ListItem>
                        <ListItemIcon>

                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
}

export default SideMenu;
