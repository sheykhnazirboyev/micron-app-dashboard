import { makeStyles, withStyles, } from '@material-ui/core/styles';
import AppConfig from '../../../../constants';
import dashboardColors from '../../../../constants/colors';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: "pink",
        width: "100vw",
        height: "100vh"
    },
    darkOverflow: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: " center"
    },
    paper: {
        width: "450px",
        height: "550px",
        margin: "0em auto",
        boxShadow: "10px 10px 10px 10px rgba(0, 0, 0, 0.5)",
        position: "relative",
        backgroundImage: `url('${AppConfig.loginBackground}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    },
    darkWindow: {
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        height: "550px",
        color: "#fff",
    },
    Toolbar: {
        display: "flex",
        justifyContent: "center",
    },
    header: {
        width: "320px",
        borderRadius: "5px",
        top: "-30px",
        left: "",
        textAlign: "center",
        paddingTop: "2em",
        paddingBottom: "0.5em",

    },
    
    icon: {
        margin: "5px",
        color: "#fff",
        "&:hover":{
            backgroundColor: dashboardColors.loginHeader
        }
    },
    link:{
        color: dashboardColors.loginHeader,
        textDecoration: "none"
    },
    textField:{
        color: "#fff"
    },
    btn:{
        textDecoration: "none",
        color:" inherit"
    }
}));

export const CssTextField = withStyles({
    root: {
        margin: "0.5em",
        "& label":{
            color: "#fff"
        },
        "& input":{
            color :"#fff"
        },
        '& label.Mui-focused': {
            color: dashboardColors.loginHeader,
        },
        '& .MuiInput-underline:before': {
            borderBottomColor: "#fff",
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: dashboardColors.loginHeader,
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'red',
            },
        }
    },
    
})(TextField);

export const ColorButton = withStyles((theme) => ({
    root: {
        margin: "0.5em",
        backgroundColor: "transparent",
        borderColor: "#fff",
        color: "#fff",
        '&:hover': {
            color: "#fff",
            borderColor: dashboardColors.loginHeader,
            backgroundColor: dashboardColors.loginHeader,
        },
    },
}))(Button);



export default useStyles;