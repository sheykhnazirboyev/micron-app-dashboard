import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({

    root: {
        width: '100%',
        marginTop:"1em",
    },
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
        position:"relative",
    },
    toolBar: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
    },
    title: {
        flex: '1 1 100%',
        marginLeft:"4em"
    },
    label:{
        background:"linear-gradient(60deg, #ec407a, #d81b60)",
        padding:"1em 1.5em",
        boxShadow:"3px 3px 3px 3px #eee",
        color:"#fff",
        position:"absolute",
        left:"10px",
        top:"-20px"
    },
    search: {
        position: 'relative',
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    icon:{
        color: "#aaa"
    }
}));

export default useStyles;