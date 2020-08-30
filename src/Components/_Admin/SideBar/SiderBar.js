import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Avatar from '@material-ui/core/Avatar';
import AppConfig from '../../../constants';
import useStyles, { StyledBadge } from "./styles";
import { Typography } from '@material-ui/core';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { logOutUser } from '../../../_actions/userActions';
import menus from './menus';
import NavLinks from './NavLinks';

function SiderBar({ open, handleDrawerClose }) {
  const classes = useStyles();

  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user)


  const [activeMenu, setActiveMenu] = useState("/admin");

  const location = useLocation();

  const [openDrop, setOpenDrop] = React.useState(false);

  const handleClick = () => {
    setOpenDrop(!openDrop);
  };

  const handleLogout = () => {
    dispatch(logOutUser());
  }

  useEffect(() => {
    setActiveMenu(location.pathname);
  }, [location])


  return (
    <div>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.sidebarBackgroundStyles}>
          <div className={classes.logo}>
            <Link to = "/">
              <img src={AppConfig.logo} alt={AppConfig.logo1} width="200px" />
            </Link>
          </div>
          <div className={classes.toolbar}>
            <List
              component="nav"
              aria-labelledby="nested-list-subheader"
              className={classes.user}
            >
              <ListItem button onClick={handleClick}>
                <StyledBadge
                  overlap="circle"
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  variant="dot"
                >
                  <Avatar alt="Remy Sharp" src={AppConfig.avatar} />
                </StyledBadge>
                <Typography variant="subtitle1" className={classes.avatar}>
                  {user.user && user.user.name}
                </Typography>
                {openDrop ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={openDrop} timeout="auto" unmountOnExit>
                <List component="div" >
                  <ListItem button className={classes.userNested} onClick={handleLogout}>
                    <ListItemIcon className={classes.listIcon}>
                      <ExitToAppIcon />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                  </ListItem>
                </List>
              </Collapse>
            </List>

          </div>
          <List className={classes.list}>
            {
              menus.map((menu, i) =>
                <NavLinks
                  key={i}
                  menu={menu}
                  activeMenu={activeMenu}
                />)
            }
          </List>
          <Divider />
          <List className={classes.list}>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon className={classes.listIcon}>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>

      </Drawer>
    </div>
  )
}

export default SiderBar
