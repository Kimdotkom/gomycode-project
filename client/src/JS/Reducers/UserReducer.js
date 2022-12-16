import { FAIL_USER, LOAD_USER, SUCCESS_USER } from "../actionTypes/ActionTypes";

//initialState
const initialState = {
    listUsers : [],
    errors : null, 
    load : false
}

//pure finction
const userReducer = (state= initialState, {type, payload}) =>{
    switch (type) {
        case LOAD_USER:
            return {...state, load: true}
        
        case SUCCESS_USER:
            return {...state, load: false, listUsers: payload}

        case FAIL_USER:
            return {...state, errors: payload, load: false}

        default:
            return state;
    }
}


export default userReducer;