import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        backgroundColor:"#eee",
        height:"100%",
        minHeight:"100vh"
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing(3, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
      },
      backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    hide:{
        display:"none"
    }
}));

export default useStyles;