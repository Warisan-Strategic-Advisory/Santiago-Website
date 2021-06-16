import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme?: any ) => ({

}))

const JoinUs: React.FC = () => {

    const classes = useStyles();

    return (
        <div style={{width:"100%"}}>
            <Grid container spacing={1} direction="row" justify="flex-start" alignItems="flex-start" >
                <Grid item xs={12}>
                    <Typography variant="h3" style={{textAlign:"center"}}>
                        Join Our Campaign
                    </Typography>
                    <Typography variant="subtitle1" style={{textAlign:"center"}}>
                        for info and updates
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField id="email" label="E-mail" variant="outlined" style={{width: "100%"}} />
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={1} direction="row" justify="flex-start" alignItems="flex-start">
                        <Grid item xs={8}>
                            <TextField id="email" label="Your Name" variant="outlined" fullWidth={true} />
                        </Grid>
                        <Grid item xs={4}>
                            <Button style={{padding:"1em", width:"100%"}} variant="contained" color="primary">Join us</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default JoinUs;