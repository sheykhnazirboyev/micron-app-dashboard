import React, {useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../Header';
import SiderBar from '../SideBar/SiderBar';
import useStyles from './styles';
import SnackBar from '../SnackBar';
import { toggleSnackBar } from '../../../_actions/appActions';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

function Dashboard(props) {
    const classes = useStyles();

    const dispatch = useDispatch();

    const loading = useSelector(state => state.app.loading)

    useEffect(() => {
        dispatch(toggleSnackBar(false))
    },[props])

    const [open, setOpen] = React.useState(true);

    const handleToggleDrawer = () => {
        setOpen(!open);
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Header
                open={open}
                handleToggleDrawer={handleToggleDrawer}
            />
            <SiderBar
                open={open}
            />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <SnackBar />
                <Backdrop className={classes.backdrop} open={loading} >
                    <CircularProgress color="inherit" />
                </Backdrop>
                    {props.children}    
            </main>
        </div>
    );
}

export default Dashboard;