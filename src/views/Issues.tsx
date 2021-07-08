import React from 'react';
import {HeaderAppBar} from "../components/HeaderAppBar";
import Banner from "../components/Banner";
import { makeStyles } from '@material-ui/core/styles';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HomeIcon from '@material-ui/icons/Home';
import DepartureBoardIcon from '@material-ui/icons/DepartureBoard';

const useStyles = makeStyles((theme?: any ) => ({
    issuesholder: {
        paddingTop: theme.spacing(3),
        [theme.breakpoints.up('md')] : {
            paddingLeft: theme.spacing(25),
            paddingRight: theme.spacing(25)
        },
        [theme.breakpoints.down('md')] : {
            paddingLeft: theme.spacing(3),
            paddingRight: theme.spacing(3)
        },
    },
    accordionstyle: {
        padding: theme.spacing(0)
    },
    icons: {
        fontSize: 100,
        color: theme.palette.secondary.main,
        paddingRight: theme.spacing(5)
    }, 
    title: {
        transform: 'translate(0,30px)'
    },
    expandicon: {
        fontSize: 40,
        color: theme.palette.primary.main
    }

}))

const Issues: React.FC =() => {
    const classes = useStyles();

    return (
        <div style={{paddingBottom: "5em"}}>
            <HeaderAppBar facebooklink="http://facebook.com" twitterlink="http://twitter.com" youtubelink="http://youtube.com" appbartype="fixed" />
            <HeaderAppBar facebooklink="http://facebook.com" twitterlink="http://twitter.com" youtubelink="http://youtube.com" appbartype="static" />
            <div>               
                <Banner title="Charles Santiago's Platform" />
            </div>
            <div className={classes.issuesholder}>
                <Accordion className={classes.accordionstyle}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon className={classes.expandicon} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >   
                        <DepartureBoardIcon  className={classes.icons}/>
                        <Typography variant="h5" className={classes.title}>
                            Issue Number 1
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="subtitle1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam eu dui ac euismod. Sed enim enim, dignissim et dignissim a, convallis vitae nunc. Sed bibendum, enim eu semper porta, ante ante efficitur felis, sit amet dapibus nibh ligula elementum turpis. Nullam a felis tortor. Etiam at vulputate eros. Nulla malesuada nisi lacus, at venenatis nisi auctor a. Cras scelerisque ornare libero, nec iaculis nisl aliquam id. Suspendisse sem tortor, ultrices quis congue in, ultrices sed dui. Fusce interdum sit amet felis quis scelerisque. Curabitur sodales ullamcorper facilisis. In efficitur interdum purus eu sagittis. Nulla cursus, mauris a maximus pharetra, felis erat iaculis metus, vel posuere odio ipsum id urna. Curabitur mattis, urna sit amet egestas scelerisque, arcu nisl placerat ipsum, ac maximus ipsum massa eget orci. Ut efficitur, ante non scelerisque scelerisque, metus odio fringilla mi, sit amet viverra purus libero ac quam. Donec dictum, dolor vitae pharetra posuere, enim ante aliquet ipsum, id rutrum libero dolor vel nisi. Aenean sagittis gravida posuere. Nulla consectetur, diam at scelerisque ornare, elit est imperdiet nisl, in malesuada diam erat ut erat. Suspendisse augue turpis, imperdiet maximus est id, gravida fermentum justo. Nunc fermentum, neque sit amet lacinia elementum, metus ipsum tincidunt dolor, fringilla lobortis risus est ut erat. In a libero a ante lacinia commodo ac vel enim. Etiam sed vehicula risus. Pellentesque nec augue lacus. Aenean elementum lobortis mi a sagittis. In volutpat, tortor non fermentum vehicula, nunc justo luctus nibh, at vestibulum diam leo a nibh. Suspendisse a efficitur ex. Suspendisse potenti. 
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={classes.accordionstyle}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon className={classes.expandicon} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <HomeIcon  className={classes.icons}/>
                        <Typography variant="h5" className={classes.title}>
                            Issue Number 2
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="subtitle1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam eu dui ac euismod. Sed enim enim, dignissim et dignissim a, convallis vitae nunc. Sed bibendum, enim eu semper porta, ante ante efficitur felis, sit amet dapibus nibh ligula elementum turpis. Nullam a felis tortor. Etiam at vulputate eros. Nulla malesuada nisi lacus, at venenatis nisi auctor a. Cras scelerisque ornare libero, nec iaculis nisl aliquam id. Suspendisse sem tortor, ultrices quis congue in, ultrices sed dui. Fusce interdum sit amet felis quis scelerisque. Curabitur sodales ullamcorper facilisis. In efficitur interdum purus eu sagittis. Nulla cursus, mauris a maximus pharetra, felis erat iaculis metus, vel posuere odio ipsum id urna. Curabitur mattis, urna sit amet egestas scelerisque, arcu nisl placerat ipsum, ac maximus ipsum massa eget orci. Ut efficitur, ante non scelerisque scelerisque, metus odio fringilla mi, sit amet viverra purus libero ac quam. Donec dictum, dolor vitae pharetra posuere, enim ante aliquet ipsum, id rutrum libero dolor vel nisi. Aenean sagittis gravida posuere. Nulla consectetur, diam at scelerisque ornare, elit est imperdiet nisl, in malesuada diam erat ut erat. Suspendisse augue turpis, imperdiet maximus est id, gravida fermentum justo. Nunc fermentum, neque sit amet lacinia elementum, metus ipsum tincidunt dolor, fringilla lobortis risus est ut erat. In a libero a ante lacinia commodo ac vel enim. Etiam sed vehicula risus. Pellentesque nec augue lacus. Aenean elementum lobortis mi a sagittis. In volutpat, tortor non fermentum vehicula, nunc justo luctus nibh, at vestibulum diam leo a nibh. Suspendisse a efficitur ex. Suspendisse potenti. 
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={classes.accordionstyle}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon className={classes.expandicon} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <HomeIcon  className={classes.icons}/>
                        <Typography variant="h5" className={classes.title}>
                            Issue Number 3
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="subtitle1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam eu dui ac euismod. Sed enim enim, dignissim et dignissim a, convallis vitae nunc. Sed bibendum, enim eu semper porta, ante ante efficitur felis, sit amet dapibus nibh ligula elementum turpis. Nullam a felis tortor. Etiam at vulputate eros. Nulla malesuada nisi lacus, at venenatis nisi auctor a. Cras scelerisque ornare libero, nec iaculis nisl aliquam id. Suspendisse sem tortor, ultrices quis congue in, ultrices sed dui. Fusce interdum sit amet felis quis scelerisque. Curabitur sodales ullamcorper facilisis. In efficitur interdum purus eu sagittis. Nulla cursus, mauris a maximus pharetra, felis erat iaculis metus, vel posuere odio ipsum id urna. Curabitur mattis, urna sit amet egestas scelerisque, arcu nisl placerat ipsum, ac maximus ipsum massa eget orci. Ut efficitur, ante non scelerisque scelerisque, metus odio fringilla mi, sit amet viverra purus libero ac quam. Donec dictum, dolor vitae pharetra posuere, enim ante aliquet ipsum, id rutrum libero dolor vel nisi. Aenean sagittis gravida posuere. Nulla consectetur, diam at scelerisque ornare, elit est imperdiet nisl, in malesuada diam erat ut erat. Suspendisse augue turpis, imperdiet maximus est id, gravida fermentum justo. Nunc fermentum, neque sit amet lacinia elementum, metus ipsum tincidunt dolor, fringilla lobortis risus est ut erat. In a libero a ante lacinia commodo ac vel enim. Etiam sed vehicula risus. Pellentesque nec augue lacus. Aenean elementum lobortis mi a sagittis. In volutpat, tortor non fermentum vehicula, nunc justo luctus nibh, at vestibulum diam leo a nibh. Suspendisse a efficitur ex. Suspendisse potenti. 
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={classes.accordionstyle}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon className={classes.expandicon} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <HomeIcon  className={classes.icons}/>
                        <Typography variant="h5" className={classes.title}>
                            Issue Number 4
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="subtitle1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam eu dui ac euismod. Sed enim enim, dignissim et dignissim a, convallis vitae nunc. Sed bibendum, enim eu semper porta, ante ante efficitur felis, sit amet dapibus nibh ligula elementum turpis. Nullam a felis tortor. Etiam at vulputate eros. Nulla malesuada nisi lacus, at venenatis nisi auctor a. Cras scelerisque ornare libero, nec iaculis nisl aliquam id. Suspendisse sem tortor, ultrices quis congue in, ultrices sed dui. Fusce interdum sit amet felis quis scelerisque. Curabitur sodales ullamcorper facilisis. In efficitur interdum purus eu sagittis. Nulla cursus, mauris a maximus pharetra, felis erat iaculis metus, vel posuere odio ipsum id urna. Curabitur mattis, urna sit amet egestas scelerisque, arcu nisl placerat ipsum, ac maximus ipsum massa eget orci. Ut efficitur, ante non scelerisque scelerisque, metus odio fringilla mi, sit amet viverra purus libero ac quam. Donec dictum, dolor vitae pharetra posuere, enim ante aliquet ipsum, id rutrum libero dolor vel nisi. Aenean sagittis gravida posuere. Nulla consectetur, diam at scelerisque ornare, elit est imperdiet nisl, in malesuada diam erat ut erat. Suspendisse augue turpis, imperdiet maximus est id, gravida fermentum justo. Nunc fermentum, neque sit amet lacinia elementum, metus ipsum tincidunt dolor, fringilla lobortis risus est ut erat. In a libero a ante lacinia commodo ac vel enim. Etiam sed vehicula risus. Pellentesque nec augue lacus. Aenean elementum lobortis mi a sagittis. In volutpat, tortor non fermentum vehicula, nunc justo luctus nibh, at vestibulum diam leo a nibh. Suspendisse a efficitur ex. Suspendisse potenti. 
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    )
}

export default Issues