import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root:{
        
    },
    paper:{
        padding: "2em",
        border: "1px solid #fff",
      "&:hover":{
        boxShadow: "3px 3px 7px 5px #aaa"
      }
    },
    header:{
        textAlign:"center",
        color: "#aaa"
    },
    body:{
        textAlign:"center",
        color: "magenta"
    },
    icon:{
        color: "magenta",
        fontSize: "40px"
    }
}));

export default useStyles;