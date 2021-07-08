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
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import MenuIcon from '@material-ui/icons/Menu';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import Logo from '../assets/img/logo.png';

import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';

interface Props {
    facebooklink: string,
    twitterlink: string,
    youtubelink: string,
    appbartype: any
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
    },
    inithover: {
        boxShadow: 'none'
    },
    popoutstyle: {
        textAlign: 'center'
    },
    popoutmenutext: {
        padding: theme.spacing(1)
    }
}))

export const HeaderAppBar: React.FC<Props> = ({facebooklink, youtubelink, twitterlink, appbartype}) => {
    const classes = useStyles();
    const [draweropen, setDraweropen] = useState(false);
    const [initMenu, setInitMenu] = useState(false);
    const [initMenuMobile, setInitMenuMobile] = useState(false);
    const anchorRef = React.useRef<HTMLButtonElement>(null);
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

    const handleInitToggle = () => {
        setInitMenu((prevOpen) => !prevOpen);
    };

    const handleInitToggleMobile = () => {
        setInitMenuMobile((prevOpen) => !prevOpen);
    };
    
    const handleClose = (event: React.MouseEvent<EventTarget>) => {    
        setInitMenu(false);
    };

    function handleListKeyDown(event: React.KeyboardEvent) {
        if (event.key === 'Tab') {
          event.preventDefault();
          setInitMenu(false);
        }
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
                        <ListItem button key="about" onClick={()=> history.push("/about")}>
                            <ListItemText primary="ABOUT" />
                        </ListItem>
                        <ListItem button key="issues" onClick={()=> history.push("/issues")}>
                            <ListItemText primary="ISSUES" />
                        </ListItem>
                        <ListItem button key="home" onClick={handleInitToggleMobile}>
                            <ListItemText primary="INITIATIVES" />
                            {initMenuMobile ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={initMenuMobile} timeout="auto" >
                            <ListItem button key="home" style={{paddingLeft:"3em"}} onClick={()=> history.push("/initiatives/cwc")}>
                                <ListItemText primary="CHAI WITH CHARLES" />
                            </ListItem>
                            <ListItem button key="home" style={{paddingLeft:"3em"}} onClick={()=> history.push("/initiatives/foodbank")}>
                                <ListItemText primary="FOOD BANK" />
                            </ListItem>
                            <ListItem button key="home" style={{paddingLeft:"3em"}} onClick={()=> history.push("/initiatives/satuharimp")}>
                                <ListItemText primary="SATU HARI MP" />
                            </ListItem>
                        </Collapse>
                        <ListItem button key="home">
                            <ListItemText primary="CONTACT" onClick={()=> history.push("/contact")} />
                        </ListItem>
                    </List>
                </div>
            </SwipeableDrawer>
            <AppBar position={appbartype} className={classes.headerappbar}>
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
                        <Button className={classes.textbuttons} onClick={()=> history.push("/about")}>ABOUT</Button>
                        <Button className={classes.textbuttons} onClick={()=> history.push("/issues")}>ISSUES</Button>
                        <Button className={classes.textbuttons} ref={anchorRef} aria-controls={initMenu ? 'menu-list-grow' : undefined} aria-haspopup="true" onClick={handleInitToggle} onMouseEnter={handleInitToggle} >INITIATIVES</Button>
                        <Popper open={initMenu} anchorEl={anchorRef.current} role={undefined} transition disablePortal className={classes.inithover}>
                            {({ TransitionProps, placement }) => (
                            <Grow {...TransitionProps} style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'}}>
                                <Paper>
                                    <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList autoFocusItem={initMenu} id="menu-list-grow" onKeyDown={handleListKeyDown} onMouseLeave={handleInitToggle} className={classes.popoutstyle}>
                                        <MenuItem onClick={()=> history.push("/initiatives/cwc")}><Typography variant="h6" className={classes.popoutmenutext}>Chai With Charles</Typography></MenuItem>
                                        <MenuItem onClick={()=> history.push("/initiatives/foodbank")}><Typography variant="h6" className={classes.popoutmenutext}>Food Bank</Typography></MenuItem>
                                        <MenuItem onClick={()=> history.push("/initiatives/satuharimp")}><Typography variant="h6" className={classes.popoutmenutext}>Satu Hari MP</Typography></MenuItem>
                                    </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                            )}
                        </Popper>
                    <Button className={classes.textbuttons} onClick={()=> history.push("/contact")}>CONTACT</Button>
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

        </div>
    )
}