import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Policy from './Policy';

const useStyles = makeStyles((theme?: any ) => ({
    holder: {
        textAlign: "center",
        paddingTop: theme.spacing(3),
        [theme.breakpoints.up('md')] :{
            paddingLeft: theme.spacing(35),
            paddingRight: theme.spacing(35),
            paddingTop: theme.spacing(5)
        },
        [theme.breakpoints.down('md')] : {
            padding: theme.spacing(3)
        }
    },
    title: {
        paddingBottom: theme.spacing(5)
    }
}))

const Policies: React.FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.holder}>
            <div className={classes.title}>
                <Typography variant="h2">
                    What I Stand For
                </Typography>
            </div>
            <Grid container spacing={5} direction="row" justify="center" alignItems="stretch">
                <Grid item xs={12} md={6} lg={4} >
                    <Policy 
                        title="First Policy"
                        description="Our broken healthcare system made this novel coronavirus exceptionally crippling. Now, because our health insurance is tied to our job, over 30 million Americans are facing not only unemployment but losing their health insurance too. As we begin to reopen, we have to ask ourselves what our new normal should look like. If you lose your job, you shouldn’t lose your healthcare too. And if you get sick, you shouldn’t be put under a mountain of debt. Medicare for All guarantees healthcare to everyone, curbs costs, and improves long-term health. "
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <Policy 
                        title="First Policy"
                        description="Our broken healthcare system made this novel coronavirus exceptionally crippling. Now, because our health insurance is tied to our job, over 30 million Americans are facing not only unemployment but losing their health insurance too. As we begin to reopen, we have to ask ourselves what our new normal should look like. If you lose your job, you shouldn’t lose your healthcare too. And if you get sick, you shouldn’t be put under a mountain of debt. Medicare for All guarantees healthcare to everyone, curbs costs, and improves long-term health. "
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <Policy 
                        title="First Policy"
                        description="Our broken healthcare system made this novel coronavirus exceptionally crippling. Now, because our health insurance is tied to our job, over 30 million Americans are facing not only unemployment but losing their health insurance too. As we begin to reopen, we have to ask ourselves what our new normal should look like. If you lose your job, you shouldn’t lose your healthcare too. And if you get sick, you shouldn’t be put under a mountain of debt. Medicare for All guarantees healthcare to everyone, curbs costs, and improves long-term health. "
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <Policy 
                        title="First Policy"
                        description="Our broken healthcare system made this novel coronavirus exceptionally crippling. Now, because our health insurance is tied to our job, over 30 million Americans are facing not only unemployment but losing their health insurance too. As we begin to reopen, we have to ask ourselves what our new normal should look like. If you lose your job, you shouldn’t lose your healthcare too. And if you get sick, you shouldn’t be put under a mountain of debt. Medicare for All guarantees healthcare to everyone, curbs costs, and improves long-term health. "
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <Policy 
                        title="First Policy"
                        description="Our broken healthcare system made this novel coronavirus exceptionally crippling. Now, because our health insurance is tied to our job, over 30 million Americans are facing not only unemployment but losing their health insurance too. As we begin to reopen, we have to ask ourselves what our new normal should look like. If you lose your job, you shouldn’t lose your healthcare too. And if you get sick, you shouldn’t be put under a mountain of debt. Medicare for All guarantees healthcare to everyone, curbs costs, and improves long-term health. "
                    />
                </Grid>
            </Grid>
        </div>
    )
}

export default Policies