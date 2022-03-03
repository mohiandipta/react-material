import { makeStyles } from '@material-ui/styles';
import React from 'react';
import SideMenu from '../components/SideMenu';
import TopMenu from '../components/TopMenu';

const classes = makeStyles();

const Home = () => {
    return (
        <div className={classes.root}>
            <TopMenu />
            <SideMenu />
        </div>
    );
}

export default Home;
