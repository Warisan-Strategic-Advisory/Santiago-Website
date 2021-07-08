import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';

const useStyles = makeStyles((theme?: any ) => ({
    gridstyle : {
        alignItems : "left",
        textAlign: "left"
    },
    icon: {
        fontSize: "7em",
        transform: "translate(2px, 13px)",
        color: theme.palette.secondary.main
    },
    wc: {
        paddingLeft: "1em",
        transform: "translate(0, -22px)",
        color: theme.palette.primary.dark

    },
    chai: {
        transform: "translate(0,5px)",
        color: theme.palette.primary.main
    }
}))

const CwCLogo: React.FC = () => {
    const classes = useStyles();
    return (
        <div>
            <div>
                <Grid container>
                    <LocalCafeIcon className={classes.icon} />
                    <Typography variant="h1" className={classes.chai}>
                        Chai
                    </Typography>
                </Grid>
            </div>
            <div className={classes.wc}>
                <Typography variant="h1">
                    With Charles
                </Typography>
            </div>
        </div>
    )
}

export default CwCLogo;