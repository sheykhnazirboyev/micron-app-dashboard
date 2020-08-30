import { SET_LOADER, HIDE_LOADER, OPEN_MENU, CLOSE_MENU, TOGGLE_SNACKBAR } from "../_actions/types";

 const initialState = {
    loading: false,
    openedMenus:{},
    snackBar: {
        status: false,
        msg:"",
        type:""
    },
 };

 export default function (state = initialState, action ){
     switch(action.type){
         case SET_LOADER: 
            return {...state, loading: action.payload}
        case HIDE_LOADER:
            return {...state, loading: action.payload}
        case OPEN_MENU: 
        {
            let newOpenedMenus = {...state.openedMenus};
            newOpenedMenus[action.payload] = true;
            return {...state, openedMenus: newOpenedMenus}
        }
            
        case CLOSE_MENU: {
            let newOpenedMenus = {...state.openedMenus};
            newOpenedMenus[action.payload] = false;
            return {...state, openedMenus: newOpenedMenus}
        }
        case TOGGLE_SNACKBAR:{
            if(action.payload === false){
                return {...state, snackBar: {status: action.payload, msg:"", type:""}}
            }
            else {
                return {...state, snackBar: action.payload }
            }
            
        }
            
         default: return state
     }
 }