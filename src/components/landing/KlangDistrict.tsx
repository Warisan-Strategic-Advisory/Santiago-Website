import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


import klangcolors from '../../assets/img/klangcolors.png';


const useStyles = makeStyles((theme?: any ) => ({
    border: {
        height: "100%",
        background: theme.palette.primary.main,
        padding: theme.spacing(1),
        paddingBottom: theme.spacing(5),
        paddingTop: theme.spacing(2),
        textAlign: "center",
    },
    holder: {
        padding: theme.spacing(6)
    },
    text: {
        color: "#FFFFFF"
    },
    button: {
    }
}))

const KlangDistrict: React.FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.holder}>
            <Box border={6} borderRadius={16} borderColor="primary.main" className={classes.border}>
                <img src={klangcolors} width="50%" alt="Klang district map" />
                <Typography variant="h4" className={classes.text}>
                    Klang District
                </Typography>
                <Typography variant="h5" className={classes.text}>
                    Selangor
                </Typography>
                <div style={{ paddingTop: "2em"}}>
                    <Button variant="contained" color="secondary" className={classes.button}>
                        Learn more
                    </Button>
                </div>
            </Box>
        </div>
    )
}

export default KlangDistrict;