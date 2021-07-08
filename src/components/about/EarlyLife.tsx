import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Temporary from "../../assets/img/temporary.webp";

const useStyles = makeStyles((theme?: any ) => ({
    holder: {
        backgroundColor: theme.palette.primary.main,
        height: "100%",
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(10),
            paddingLeft: theme.spacing(20),
            paddingRight: theme.spacing(20)
        },
        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(5)
        }        
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
        fontSize: 18,
        boxShadow: 'none'
    },
    textholder:{
        [theme.breakpoints.up('md')]: {
            paddingRight: theme.spacing(5)
        }
    }
}))

const EarlyLife: React.FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.holder}>
            <Grid container direction="row" justify="flex-start" alignItems="stretch">
                <Grid item xs={12} lg={8}>
                    <div className={classes.textholder}>
                        <Typography variant="h4" className={classes.text}>
                            Early Life
                        </Typography>
                        <Typography variant="subtitle1" className={classes.text}>
                        Alexandria was born in the Bronx to working-class parents. Her father was a small business owner from the South Bronx. Her mother was born in Puerto Rico—growing up around a large family near Arecibo. Her mother cleaned homes, and everyone pitched in on the family business. From an early age, Alexandria grew up with a deep understanding of income inequality. The state of Bronx public schools in the late 80s and early 90s sent her parents on a search for a solution. She ended up attending public school in Yorktown—40 minutes north of her birthplace. As a result, much of her early life was spent in transit between her tight-knit extended family in the Bronx and her daily student life. It was clear to her, even then, that the zip code a child was born in determined much of their destiny. 
                        </Typography>
                        <Typography variant="subtitle1" className={classes.text}>
                        Alexandria was born in the Bronx to working-class parents. Her father was a small business owner from the South Bronx. Her mother was born in Puerto Rico—growing up around a large family near Arecibo. Her mother cleaned homes, and everyone pitched in on the family business. From an early age, Alexandria grew up with a deep understanding of income inequality. The state of Bronx public schools in the late 80s and early 90s sent her parents on a search for a solution. She ended up attending public school in Yorktown—40 minutes north of her birthplace. As a result, much of her early life was spent in transit between her tight-knit extended family in the Bronx and her daily student life. It was clear to her, even then, that the zip code a child was born in determined much of their destiny. 
                        </Typography>

                    </div>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <img src={Temporary} className={classes.image} alt="Early life" />
                </Grid>
            </Grid>
        </div>
    )
}

export default EarlyLife;