import { FAIL_ANNONCE, LOAD_ANNONCE, SUCCESS_ANNONCE, SET_DETAILS, MY_ANNONCES } from "../actionTypes/ActionTypes";

//initialState
const initialState = {
    listAnnonces : [],
    myAnnonces : [],
    errors : null, 
    load : false,
    details : {}
}

//pure finction
const annonceReducer = (state= initialState, {type, payload}) =>{
    switch (type) {
        case LOAD_ANNONCE:
            return {...state, load: true}
        
        case SUCCESS_ANNONCE:
            return {...state, load: false, listAnnonces: payload}
        
        case MY_ANNONCES:
            return {...state, load: false, myAnnonces : payload}
            
        case FAIL_ANNONCE:
            return {...state, errors: payload, load: false}

        case SET_DETAILS:
            return {...state, details: payload }

        default:
            return state;
    }
}


export default annonceReducer;