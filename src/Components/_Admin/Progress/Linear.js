import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';


const theme = createMuiTheme({
    palette: {
        secondary: {
            main: '#ff00ff'
        }
    }
})

export default function LinearDeterminate({ value }) {
    
    return (
        <div >
            <MuiThemeProvider theme={theme}>
                <LinearProgress style = {{ backgroundColor: "#eee" }} color="secondary" variant="determinate" value={value} />
            </MuiThemeProvider>
        </div>
    );
}
