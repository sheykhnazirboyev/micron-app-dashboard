import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        
    },
    paper:{
        
    },
    imgGallery:{
        padding: "1em"
    },
    content:{
        alignItems: "center",
        flexDirection: "row"
    },
    mute:{
        color: "rgba(0, 0, 0,0.4)"
    },
    header:{
        padding: "1em 2em"
    },
    body:{
        padding: "1em 2em"
    }
}));

export default useStyles;