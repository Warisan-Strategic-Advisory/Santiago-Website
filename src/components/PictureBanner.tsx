import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

interface Props {
    title: string,
    description: string,
    image: string
}

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
        fontSize: 18,
        boxShadow: 'none'
    }
}))


const PictureBanner: React.FC<Props> = ({title, description, image}) => {
    const classes = useStyles();
    return (
        <div>
            <Grid container direction="row" justify="flex-start" alignItems="stretch">
                <Grid item xs={12} lg={4}>
                    <img src={image} className={classes.image} alt="Charles Santiago portrait" />
                </Grid>
                <Grid item xs={12} lg={8}>
                    <div className={classes.description}>
                        <Typography variant="h4" className={classes.text}>
                            {title}
                        </Typography>
                        <Typography variant="subtitle1" className={classes.text}>
                            {description}
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

export default PictureBanner;