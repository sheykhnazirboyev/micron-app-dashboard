import { makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({

    root: {
        width: '100%',
    },
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    toolBar: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
    },
    title: {
        flex: '1 1 100%',
    },
    formRoot:{
        width: "90%",
        padding: "1em"
    },
    formControl: {
        marginBottom: theme.spacing(2) ,
      },
    
}));

export default useStyles;