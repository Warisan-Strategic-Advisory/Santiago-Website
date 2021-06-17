import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


type Props = {
    title: string
}

const useStyles = makeStyles((theme?: any ) => ({
    bannerstyle: {
        backgroundColor: theme.palette.primary.main,
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
        textAlign: 'center'
    },
    text: {
        color: "#FFFFFF"
    }
}))

const Banner: React.FC<Props> = ({title}) => {
    const classes = useStyles();
    return (
        <div className={classes.bannerstyle}>
            <Typography variant="h2" className={classes.text}>
                {title}
            </Typography>
        </div>
    )
}

export default Banner;