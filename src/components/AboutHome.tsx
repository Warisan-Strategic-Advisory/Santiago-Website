import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Santiago from '../assets/img/santiago.jpg';

const useStyles = makeStyles((theme?: any ) => ({
    description: {
        backgroundColor: theme.palette.primary.main,
        height: "100%",
        padding: theme.spacing(5)
        
    },
    image: {
        width: "100%",
    },
    text: {
        color: "#FFFFFF",
        paddingBottom: theme.spacing(3)
    },
    button: {
        backgroundColor : "#FFFFFF",
        color: theme.palette.primary.main,
        padding: theme.spacing(2),
        fontSize: 18
    }
}))


const AboutHome: React.FC = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid container direction="row" justify="flex-start" alignItems="stretch">
                <Grid item xs={12} lg={4}>
                    <img src={Santiago} className={classes.image} alt="Charles Santiago portrait" />
                </Grid>
                <Grid item xs={12} lg={8}>
                    <div className={classes.description}>
                        <Typography variant="h4" className={classes.text}>
                            With working families struggling and our planet under threat, we can’t just wait around for progressive change. It’s time for us to act.
                        </Typography>
                        <Typography variant="subtitle1" className={classes.text}>
                        Our campaign is fighting for a powerful set of policies that will reshape our economy, minimize inequality and reverse the effects of climate change. Through a Green New Deal, we will eliminate our greenhouse gas emissions and guarantee a high-wage job to everyone who wants one. And we’re not stopping there⁠—our platform calls for federal limits on rent increases, transformative criminal justice reform, Medicare for All and tuition-free public college.
                        The time for half measures is over. We need solutions that are big enough to match the crises we face.                         
                        </Typography>
                        <div style={{paddingTop: "2em"}}>   
                            <Button variant="contained" className={classes.button} href="/about">
                                Read more about Charles Santiago
                            </Button>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default AboutHome;