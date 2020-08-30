import { SET_LOADER, HIDE_LOADER, OPEN_MENU, CLOSE_MENU, TOGGLE_SNACKBAR } from "./types"

export const setLoader = () => dispatch => {
    dispatch({
        type: SET_LOADER,
        payload: true
    });
}

export const hideLoader = () => dispatch => {
    dispatch({
        type: HIDE_LOADER,
        payload: false
    });
}

export const openMenu = (menuItem) => dispatch => {
    dispatch({
        type: OPEN_MENU,
        payload: menuItem
    });
}

export const closeMenu = (menuItem) => dispatch => {
    dispatch({
        type: CLOSE_MENU,
        payload: menuItem
    })
}

export const toggleSnackBar = (val) => dispatch => {
    dispatch({
        type: TOGGLE_SNACKBAR,
        payload: val
    });
}