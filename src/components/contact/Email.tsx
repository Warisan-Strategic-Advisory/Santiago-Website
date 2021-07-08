import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme?: any ) => ({
    containerstyle: {
        textAlign: "center"
    },
    subtitle: {
        color: theme.palette.secondary.main
    },
    textfields: {
        [theme.breakpoints.up('md')] : {
            width: "80%",
        },
        [theme.breakpoints.down('sm')] : {
            width: "100%",
        }
    },
    textholder: {
        padding: theme.spacing(1)
    },
    submitbutton: {
        [theme.breakpoints.up('md')] : {
            width: "80%",
            padding: theme.spacing(1)
        },
        [theme.breakpoints.down('sm')] : {
            width: "100%",
            padding: theme.spacing(1)
        }

    }
}))


const Email: React.FC = () => {
    const classes = useStyles();
    return ( 
        <div className={classes.containerstyle}>
            <Typography variant="h2">
                Want to get in touch?
            </Typography> 
            <Typography variant="subtitle1" className={classes.subtitle}>
                Democracy | Human Rights | Justice
            </Typography>
            <div className={classes.textholder}><TextField id="email" variant="outlined" label="Your e-mail address" className={classes.textfields}/></div>
            <div className={classes.textholder}><TextField id="firstname" variant="outlined" label="Your first name" className={classes.textfields}/></div>
            <div className={classes.textholder}><TextField id="lastname" variant="outlined" label="Your last name" className={classes.textfields}/></div>
            <div className={classes.textholder}><TextField id="question" variant="outlined" label="Your questions / concerns" className={classes.textfields} multiline rows={10}/></div>
            <div className={classes.textholder}><Button variant="contained" className={classes.submitbutton} color="primary">Submit</Button></div>
        </div>
    )
}
export default Email;