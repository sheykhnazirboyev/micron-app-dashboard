import { makeStyles, withStyles } from "@material-ui/core";
import Badge from '@material-ui/core/Badge';
import AppConfig from '../../../constants';
import dashboardColors from '../../../constants/colors'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  paper: {
    background: 'black',
    color: 'white',

  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    backgroundColor: "red",

  },
  sidebarBackgroundStyles: {
    padding: "0em 0.5em",
    backgroundColor: 'rgba(0, 0, 0, .6)',
    width: "100%",
    height: "100%"
  },
  drawerOpen: {
    width: drawerWidth,
    backgroundImage: `url(${AppConfig.sidebarImage})`,

    backgroundPosition: "center",
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  logo: {
    display: "flex",
    justifyContent: 'flex-start',
    alignItems: "center",
    padding: "20px 15px 5px 15px",
    "& img": {
      marginRight: "10px"
    }
  },
  avatar: {
    marginLeft: "1em",
    color: "#fff"
  },
  list: {
    color: "#fff",
  },
  listIcon: {
    color: "#fff"
  },
  
  listeItem: {
    padding: "0px",
  },
  nested: {
    paddingLeft: theme.spacing(1),
  },
  
  NavLink: {
    padding: "7px 10px",
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    textDecoration: "none",
    color: "inherit"
  },
  activeMenu: {
    width: "100%",
    height: "100%",
    backgroundColor: dashboardColors.activeRoute,
    borderRadius: "5px"
  },
  user:{
    padding:"0px",
    width:"100%",
    color:"#fff"
  },
  userNested:{
    paddingLeft: theme.spacing(3)
  }
}))

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge);

export default useStyles;
export { StyledBadge };