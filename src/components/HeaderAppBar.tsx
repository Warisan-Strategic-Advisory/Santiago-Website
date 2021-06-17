import React, {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import MenuIcon from '@material-ui/icons/Menu';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import Logo from '../assets/img/logo.png';


interface Props {
    facebooklink: string,
    twitterlink: string,
    youtubelink: string
}

const useStyles = makeStyles((theme?: any ) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        display: 'none',
        [theme.breakpoints.down('sm')]: {
          display: 'block',
        },
    },
    menuButtonElement: {
        fontSize: 30,
        
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
          display: 'flex',
          textAlign: "center"
        },
    },
    title: {
        display: 'none',
        maxHeight: 80,
        [theme.breakpoints.up('md')]: {
          display: 'block',
          paddingLeft: theme.spacing(10)
        },
    },
    textbuttons: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        fontSize: 16,
        color: "#000000"
    },
    iconbuttons : {
        fontSize: 30,
        
    },
    headerappbar: {
        background: "#ffffff", //TODO add some transparency and change the color
        width: "100%",
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(2)
        }
    },
    iconbuttonwrapper: {
        [theme.breakpoints.up('md')]: {
            paddingLeft: theme.spacing(3),
            paddingRight: theme.spacing(3),
    
        },
    },
    iconsdiv: {
        [theme.breakpoints.up('lg')]: {
            paddingRight: theme.spacing(40)
        },
    },
    drawer: {
        width: 300
    },
    menuicon: {
        padding: theme.spacing(4),
        maxHeight: 150
    }

}))

export const HeaderAppBar: React.FC<Props> = () => {
    const classes = useStyles();
    const [draweropen, setDraweropen] = useState(false);
    const history = useHistory();
    
    const toggleDrawer = (open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent,
    ) => {
        if (
            event &&
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
              (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }
        setDraweropen(open);
    }

    return (
        <div className={classes.grow}>
            <SwipeableDrawer anchor="left" open={draweropen} onClose={toggleDrawer(false)} onOpen={toggleDrawer(true)} >
                <div className={classes.drawer}>
                    <IconButton onClick={()=> history.push("/")}>
                        <img src={Logo} className={classes.menuicon} alt="logo"/>
                    </IconButton>
                    <Divider></Divider>
                    <List>
                        <ListItem button key="home" onClick={()=> history.push("/")}>
                            <ListItemText primary="HOME" />
                        </ListItem>
                        <ListItem button key="about">
                            <ListItemText primary="ABOUT" />
                        </ListItem>
                        <ListItem button key="issues" onClick={()=> history.push("/issues")}>
                            <ListItemText primary="ISSUES" />
                        </ListItem>
                        <ListItem button key="home">
                            <ListItemText primary="INITIATIVES" />
                        </ListItem>
                        <ListItem button key="home">
                            <ListItemText primary="CONTACT" />
                        </ListItem>
                    </List>
                </div>
            </SwipeableDrawer>
            <AppBar position="fixed" className={classes.headerappbar}>
                <Toolbar>
                    <IconButton 
                        edge="start"
                        className={classes.menuButton}
                        color="primary"
                        aria-label="open drawer"
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon className={classes.menuButtonElement} />
                    </IconButton>
                    <IconButton onClick={()=> history.push("/")}>
                        <img src={Logo} className={classes.title} alt="logo" />
                    </IconButton>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <Button className={classes.textbuttons} onClick={()=> history.push("/")}>HOME</Button>
                        <Button className={classes.textbuttons}>ABOUT</Button>
                        <Button className={classes.textbuttons} onClick={()=> history.push("/issues")}>ISSUES</Button>
                        <Button className={classes.textbuttons}>INITIATIVES</Button>
                        <Button className={classes.textbuttons}>CONTACT</Button>
                    </div>
                    <div className={classes.iconsdiv} >
                        <IconButton aria-label="facebook" color="primary" className={classes.iconbuttonwrapper} >
                            <FacebookIcon className={classes.iconbuttons}/>
                        </IconButton>
                        <IconButton aria-label="twitter" color="primary" className={classes.iconbuttonwrapper}>
                            <TwitterIcon className={classes.iconbuttons}/>
                        </IconButton>
                        <IconButton aria-label="instagram" color="primary" className={classes.iconbuttonwrapper}>
                            <InstagramIcon className={classes.iconbuttons}/>
                        </IconButton>
                        <IconButton aria-label="youtube" color="primary" className={classes.iconbuttonwrapper} >
                            <YouTubeIcon className={classes.iconbuttons}/>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            <Toolbar />

        </div>
    )
}