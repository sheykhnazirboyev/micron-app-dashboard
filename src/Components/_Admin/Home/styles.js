import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: "3em 2em",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        border: "1px solid #fff",
        "&:hover": {
            boxShadow: "3px 3px 7px 5px #aaa"
        }
    },
    subtitle: {
        color: "#aaa"
    },
    chartPaper: {
        position: "relative",
        marginTop: "2em",
        width: "100%",
        height: "250px",
    },
    chartRoot: {
        padding: "1em",
        position: "relative",
        border: "1px solid #fff",
        "&:hover": {
            boxShadow: "3px 3px 7px 5px #aaa"

        }
    },
    lineCahrt: {

        width: "100%",
        height: "100%",
        background: "#fff",
        borderRadius: "5px",
    },
    doughtnutTxt: {
        position: "absolute",
        fontSize:"20px",
        top: "45%",
        left: "45%",
        color: "#aaa",
        [theme.breakpoints.down('sm')]: {
            display: "none"
        },
    },
    doughtnutTxt1: {
        fontSize: "18px",
        color: "#aaa",
        [theme.breakpoints.up('sm')]: {
            display: "none"
        },
    },
    lpItem:{
        color: "#aaa",
    },
    status:{
        color:"#111"
    },
    steps:{
        display:"flex",
        justifyContent:"space-between"
    }
}));

export default useStyles;