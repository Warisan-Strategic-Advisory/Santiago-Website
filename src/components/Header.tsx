import React from 'react';
 
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import headerimg from "../assets/img/headerimg.png";
import logo from "../assets/img/logo.jpg";
import JoinUs from './JoinUs';

const useStyles = makeStyles((theme?: any ) => ({
    headerdiv : {
        maxHeight: "40em",
        background: "#FEC9C9"
    },
    headerimg: {
        maxWidth: "100%",
        maxHeight: "40em",
        [theme.breakpoints.up('lg')]: {
            paddingLeft: "25em"
        },

    },
    logo: {
        paddingTop: theme.spacing(8),
        maxWidth: "90%",
        [theme.breakpoints.down('xs')]: {
            display: "none"
        }
    }

}))

const Header: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.headerdiv}>
            <Grid container spacing={0} direction="row">
                <Grid item xs={12} sm={6} md={7}>
                    <img src={headerimg} className={classes.headerimg}  alt="Charles Santiago portrait" />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Grid container spacing={2} direction="row">
                        <Grid xs={12}>
                            <img src={logo} className={classes.logo} />
                        </Grid>
                        <Grid item xs={12}>
                            <JoinUs />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Header;