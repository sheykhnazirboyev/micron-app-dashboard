import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';

import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import Icon from '@material-ui/core/Icon';
import clsx from 'clsx';
import useStyles from './styles'
import { openMenu, closeMenu } from '../../../_actions/appActions';


function NavLinks({ menu, nested, handleActiveMenu, activeMenu }) {
    const classes = useStyles();
    const dispatch = useDispatch()
    const openedMenus = useSelector(state => state.app.openedMenus);
    const [open, setOpen] = React.useState();

    const handleClick = () => {
        if (openedMenus[menu.menu_title]) {
            dispatch(closeMenu(menu.menu_title))
        } else {
            dispatch(openMenu(menu.menu_title));
        }
    };

    let menuItem;
    if (menu.child_routes) {
        menuItem = <div>
            <ListItem button onClick={handleClick}>
                <ListItemIcon className={classes.listIcon} >
                    <Icon className={menu.menu_icon} />
                </ListItemIcon>
                <ListItemText primary={menu.menu_title} />
                {openedMenus[menu.menu_title] ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openedMenus[menu.menu_title]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {menu.child_routes.map((item, index) => (
                        <NavLinks key={index} menu={item} nested activeMenu={activeMenu} />
                    ))}
                </List>
            </Collapse>
        </div>
    } else {
        menuItem =
            <ListItem
                button
                className={clsx(classes.listeItem, { [classes.nested]: nested })}>
                <NavLink
                    activeClassName={activeMenu === menu.path ? classes.activeMenu : ""}
                    to={menu.path}
                    className={classes.NavLink}
                >
                        <ListItemIcon className={classes.listIcon} >
                            <Icon className={menu.menu_icon} />
                        </ListItemIcon> 
                    <ListItemText primary={menu.menu_title} />
                </NavLink>

            </ListItem>
    }

    return (
        <div>
            {menuItem}
        </div>
    )
}

export default NavLinks



