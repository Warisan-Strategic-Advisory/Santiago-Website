import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Typography from '@material-ui/core/Typography';

import Temporary from '../../assets/img/temporary.webp';

const useStyles = makeStyles((theme?: any ) => ({
    datestyle: {
        color: theme.palette.secondary.main
    },
    titlestyle: {
        color: theme.palette.primary.main
    },
    textcontent: {
        [theme.breakpoints.up('md')] : {
            padding: theme.spacing(5),
            paddingRight: theme.spacing(7),
            paddingLeft: theme.spacing(7)
        }
    },
    image: {
    }
}))

const History: React.FC = () => {
    const classes = useStyles();
    return (
        <div>
            <Timeline align="alternate">
                <TimelineItem>
                    <TimelineOppositeContent>                     
                        <img src={Temporary} width="80%" className={classes.image} alt="" />
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <div className={classes.textcontent}>
                            <Typography variant="subtitle1" className={classes.datestyle}>
                                December 12 2001
                            </Typography>
                            <Typography variant="h4" className={classes.titlestyle}>
                                Title here
                            </Typography>
                            <Typography variant="subtitle1">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.                            </Typography>
                        </div>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>                     
                        <img src={Temporary} width="80%" className={classes.image} alt="" />
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <div className={classes.textcontent}>
                            <Typography variant="subtitle1" className={classes.datestyle}>
                                December 12 2001
                            </Typography>
                            <Typography variant="h4" className={classes.titlestyle}>
                                Title here
                            </Typography>
                            <Typography variant="subtitle1">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.                            </Typography>
                        </div>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>                     
                        <img src={Temporary} width="80%" className={classes.image} alt="" />
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <div className={classes.textcontent}>
                            <Typography variant="subtitle1" className={classes.datestyle}>
                                December 12 2001
                            </Typography>
                            <Typography variant="h4" className={classes.titlestyle}>
                                Title here
                            </Typography>
                            <Typography variant="subtitle1">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.                            </Typography>
                        </div>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
    )
}

export default History;