import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { MenuItem, MenuList, SwipeableDrawer } from '@material-ui/core';
import { useHistory, useLocation } from 'react-router';
import Routes from '../Routes';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex'
    },
    drawer: {
        width: 240,
        flexShrink: 0,
        whiteSpace: 'nowrap'
    },
    menuButton: {
        marginRight: 36
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3)
    }
}));

export const Navigation = ({ children }) => {
    const classes = useStyles();
    const location = useLocation();
    const history = useHistory();
    const [open, setOpen] = useState(false);

    const activeRoute = (route) => {
        return location.pathname === route.path;
    };

    const handleNavItemClick = route => () => {
        history.push(route.path);
    };

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={classes.menuButton}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Pathfinder Character Sheet
                    </Typography>
                </Toolbar>
            </AppBar>
            <SwipeableDrawer
                anchor="left"
                open={open}
                onOpen={handleDrawerOpen}
                onClose={handleDrawerClose}
            >
                <div className={classes.toolbar}/>
                <MenuList>
                    {Routes.map((route, index) => (
                        <MenuItem selected={activeRoute(route)} button onClick={handleNavItemClick(route)} key={index}>
                            <ListItemIcon>
                                <route.iconComponent/>
                            </ListItemIcon>
                            <ListItemText primary={route.sidebarName}/>
                        </MenuItem>
                    ))}
                </MenuList>
            </SwipeableDrawer>
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                {children}
            </main>
        </div>
    );
};
