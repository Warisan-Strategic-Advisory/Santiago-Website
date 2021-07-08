import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme?: any ) => ({
    holderstyle: {
        backgroundColor: theme.palette.primary.main,
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3)
    }
}))

const Footer: React.FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.holderstyle}>
            
        </div>
    )
}

export default Footer;