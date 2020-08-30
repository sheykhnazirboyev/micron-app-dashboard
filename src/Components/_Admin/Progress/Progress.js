import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';


const theme = createMuiTheme({
    palette: {
        secondary: {
            main: '#ff00ff'
        }
    }
})


function CircularProgressWithLabel(props) {
    return (
        <Box position="relative" display="inline-flex">
            <CircularProgress variant="static" {...props} />
            <Box
                top={0}
                left={0}
                bottom={0}
                right={0}
                position="absolute"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Typography variant="caption" component="div" color="textSecondary">{`${Math.round(
                    props.value,
                )}%`}</Typography>
            </Box>
        </Box>
    );
}


function Progress({ val }) {

    const [progress, setProgress] = React.useState(val);

    return (
        <MuiThemeProvider theme={theme}>
            <CircularProgressWithLabel  color="secondary" value={progress} />
        </MuiThemeProvider>
    )

}

export default Progress
