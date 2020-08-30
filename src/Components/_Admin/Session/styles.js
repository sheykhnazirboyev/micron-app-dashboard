import { makeStyles, withStyles, } from '@material-ui/core/styles';
import AppConfig from '../../../constants';
import dashboardColors from '../../../constants/colors';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles(theme => ({
    root: {
        backgroundImage: `url('${AppConfig.loginBackground}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        height: "100vh"
    },
    darkOverflow: {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: " center"
    },
    paper: {
        width: "350px",
        height: "450px",
        margin: "0em auto",
        position: "relative"
    },
    registerPaper:{
        width: "350px",
        height: "500px",
        margin: "0em auto",
        position: "relative"
    },
    Toolbar: {
        display: "flex",
        justifyContent: "center",
        marginBottom: "3em"
    },
    registerToolbar:{
        display: "flex",
        justifyContent: "center",
        marginBottom: "1.5em"
    },
    header: {
        backgroundColor: dashboardColors.loginHeader,
        width: "320px",
        borderRadius: "5px",
        position: "absolute",
        top: "-30px",
        left: "",
        textAlign: "center",
        color: "#fff",
        paddingTop: "1em",
        paddingBottom: "1em",

    },
    icons: {
        display: "block"
    },
    icon: {
        color: "#fff"
    },
    caption:{
        color: "rgba(0, 0, 0, 0.4)"
    },
    link:{
        color: dashboardColors.loginHeader,
        textDecoration: "none",
        marginLeft: "5px"
    },
    btn:{
        textDecoration: "none",
        color: "inherit"
    }

}));


export const CssTextField = withStyles({
    root: {
        margin: "0.5em",
        '& label.Mui-focused': {
            color: dashboardColors.loginHeader,
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: dashboardColors.loginHeader,
        },
    },
})(TextField);

export const ColorButton = withStyles((theme) => ({
    root: {
        margin: "0.5em",
        backgroundColor: dashboardColors.loginHeader,
        color: "#fff",

        '&:hover': {
            color: dashboardColors.loginHeader,
            borderColor: dashboardColors.loginHeader,
        },
    },
}))(Button);


export default useStyles;