import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        
    },
    dropBox: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        maxWidth:"200px",
        width: "100%",
        height: "100px",
        border: "1px solid lightgray",
        cursor: "pointer",
        "& span": {
            textAlign: "center"
        },
        
    },
    dropZone:{
        display: "flex",
        justifyContent: "flex-start",
        textAlign:"center",
        padding: "1em 0em",
        paddingLeft: theme.spacing(2)
    },
    image:{
        width: "100%"
    },
    listImages:{
        padding: "1em"
    },
    media:{
        "&:hover":{
            
            "& $darkWindow":{
                transform: "scale(1)",
                opacity: "1",    
            }
        },
        position:"relative"
    },
    darkWindow: {
        position: "absolute",
        top: "0px",
        left: "0px",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        opacity: "0",
        display: "flex",
        justifyContent:"center",
        alignItems:"center",
        transform: "scale(0.7)",
        transition: "all 0.1s linear"
    },
    deleteIcon:{
        color: "#fff",
        fontSize: "30px"
    },
    error:{
        color: "#fff",
        textAlign:"center"
    },
    item:{
        minWidth:"100px"
    }
}));

export default useStyles;