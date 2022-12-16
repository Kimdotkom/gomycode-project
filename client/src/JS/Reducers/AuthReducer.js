import { CURRENT_USER, FAIL_AUTH, LOAD_AUTH, LOGIN_USER, LOGOUT_USER, REGISTER_USER } from "../actionTypes/ActionTypes";

//initialstate
const initialState = {
    user : null,
    loadUser: false,
    errors : null,
    isAuth : false
}


const AuthReducer = (state= initialState, {type, payload}) =>{
    switch (type) {
        case LOAD_AUTH:
            return {...state, loadUser : true}
        case REGISTER_USER :
            localStorage.setItem("token", payload.token)
            return {...state, loadUser : false, user : payload.user, isAuth : true} 
        case LOGIN_USER:
            localStorage.setItem("token", payload.token)
            return {...state, loadUser : false, user : payload.user, isAuth : true} 
        case CURRENT_USER:
            return {...state, user : payload, loadUser : false, isAuth : true}
        case LOGOUT_USER:
            localStorage.removeItem("token")
            return {loadUser : false, isAuth : false, user : null, errors : []}
        case FAIL_AUTH:
            return {...state, errors : payload}
        default:
            return state;
    }

}


export default AuthReducer