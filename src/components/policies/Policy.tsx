import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


type Props = {
    title: string;
    description: string;
}

const useStyles = makeStyles((theme?: any ) => ({
    border: {
        height: "100%",
        background: theme.palette.primary.main,
        padding: theme.spacing(3),
        paddingBottom: theme.spacing(5),
        paddingTop: theme.spacing(2),
        textAlign: "center",
    },
    text: {
        color: "#FFFFFF",
        paddingBottom: theme.spacing(4)
    },
    button: {
        backgroundColor : "#FFFFFF",
        color: theme.palette.primary.main,
        boxShadow: "none",
    }
}))

const Policy: React.FC<Props> = ({title, description}) => {
    const classes = useStyles();
    return (
        <div>
            <Box border={6} borderRadius={16} borderColor="primary.main" className={classes.border}>
                <Typography variant="h4" className={classes.text}>
                    {title}
                </Typography>
                <Typography variant="subtitle1" className={classes.text}>
                    {description}
                </Typography>
                <Button variant="contained" className={classes.button} href="/issues">
                    Read more on this
                </Button>
            </Box>
        </div>
    )
}

export default Policy;