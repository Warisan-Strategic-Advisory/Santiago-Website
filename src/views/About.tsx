import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import {HeaderAppBar} from "../components/HeaderAppBar";
import Banner from "../components/Banner";
import EarlyLife from '../components/about/EarlyLife';
import History from '../components/about/History';
import Achievements from '../components/about/Achievements';

const useStyles = makeStyles((theme?: any ) => ({
    earlylife: {
        paddingTop: theme.spacing(3)
    },
    title: {
        paddingBottom: theme.spacing(5),
        paddingTop: theme.spacing(5),
        textAlign: "center",
    }
}))


const About: React.FC = () => {
    const classes = useStyles();
    return (
        <div>
            <HeaderAppBar facebooklink="http://facebook.com" twitterlink="http://twitter.com" youtubelink="http://youtube.com" appbartype="fixed" />
            <HeaderAppBar facebooklink="http://facebook.com" twitterlink="http://twitter.com" youtubelink="http://youtube.com" appbartype="static" /> 
            <Banner title="About Charles Santiago" />
            <div className={classes.earlylife}>
                <EarlyLife />
            </div>
            <div className={classes.title}>
                <Typography variant="h2">
                    Timeline of Events
                </Typography>
            </div>
            <History />
            <div className={classes.title}>
                <Typography variant="h2">
                    What we've Achieved
                </Typography>
            </div>
            <Achievements />
        </div>
    )
}

export default About;
