import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import KlangDistrict from './KlangDistrict';


const useStyles = makeStyles((theme?: any ) => ({
    holder: {
        [theme.breakpoints.up('sm')] : {
            paddingTop: theme.spacing(13),
            paddingRight: theme.spacing(10),
            paddingLeft: theme.spacing(20)
        },
        [theme.breakpoints.down('sm')] : {
            padding: theme.spacing(3)
        }
    },
    shift: {
        [theme.breakpoints.up('sm')] : {
            transform: "translate(0, -50px)"
        }
    }
}))

const Landing: React.FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.holder}>
            <Grid container spacing={1} direction="row" justify="flex-start" alignItems="flex-start">
                <Grid item xs={12} md={8}>
                    <Typography variant="h2">
                        A Better World is Possible
                    </Typography>
                    <Typography variant="subtitle1">
                    This year, we’ve experienced the disastrous consequences of disconnected leadership that fails to meet the needs of everyday people and responds to our systemic crises by leaving everyone to fend for themselves. We’ve tried their way and it doesn’t work. Our community has proven that we are stronger together. We are stronger when we look out for each other. We are better off when we reject racism, cynicism and hate. Our future is brighter when we commit to healthcare as a human right, unprecedented climate action and the creation of millions of good dignified jobs. A better world is possible.  We just need to choose it. 
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4} lg={3} className={classes.shift}>
                    <KlangDistrict />
                </Grid>
            </Grid>
        </div>
    )
}

export default Landing