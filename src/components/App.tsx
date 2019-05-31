import { createStyles, withStyles } from '@material-ui/core';
import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Routes } from '../routes';
import GoogleAnalyticsRouteTracker from './google-analytics-route-tracker';

const styles = () =>
    createStyles({
        '@global': {
            '.root': {
                WebkitUserSelect: 'none',
            },
        },
    });

const App = (props: any) => {
    const { classes } = props;

    return (
        <div className="root">
            <Router>
                <Route component={GoogleAnalyticsRouteTracker} />
                <Routes />
            </Router>
        </div>
    );
};

export default withStyles(styles)(App);
