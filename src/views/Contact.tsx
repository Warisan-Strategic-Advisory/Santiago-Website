import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import {HeaderAppBar} from "../components/HeaderAppBar";
import Banner from "../components/Banner";
import Email from "../components/contact/Email";
import Footer from "../components/Footer";

import Chaiwithcharles from "../assets/img/chaiwithcharles.png";
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles((theme?: any ) => ({
    bannerstyle: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        textAlign: 'center',
    },
    icons: {
        fontSize: "5em",
        color: theme.palette.secondary.main        
    },
    image: {
        [theme.breakpoints.down('sm')] : {
            display: 'none'
        }
    }
}))

const Contact: React.FC = () => {
    const classes = useStyles();
    return (
        <div>
            <HeaderAppBar facebooklink="http://facebook.com" twitterlink="http://twitter.com" youtubelink="http://youtube.com" appbartype="fixed" />
            <HeaderAppBar facebooklink="http://facebook.com" twitterlink="http://twitter.com" youtubelink="http://youtube.com" appbartype="static" />
            <Banner title="Contact Us" />
            <div className={classes.bannerstyle}>
                <Grid container>
                    <Grid item xs={12} md={4}>
                        <EmailIcon className={classes.icons} />
                        <Typography variant="subtitle1">
                            charlessantiago@gmail.com                         
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <LocationOnIcon className={classes.icons} />
                        <Typography variant="subtitle1" >
                            No. 2A Jalan Bayu Tinggi 8/KS6,
                        </Typography>
                        <Typography variant="subtitle1">
                            Batu Unjur, 41200 Klang,
                        </Typography>
                        <Typography variant="subtitle1">
                            Selangor Darul Ehsan. 
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <PhoneIcon className={classes.icons}/>
                        <Typography variant="subtitle1">
                            603-33232122                         
                        </Typography>
                    </Grid>
                </Grid>
            </div>
            <Grid container style={{paddingTop:"2em"}}>
                <Grid item xs={12} md={5}>
                    <img src={Chaiwithcharles} width="100%" className={classes.image} alt="Charles Santiago smiling at you" />
                </Grid>
                <Grid item xs={12} md={7}>
                    <Email />
                </Grid>
            </Grid>
            <Footer />
        </div>
    )
}

export default Contact;